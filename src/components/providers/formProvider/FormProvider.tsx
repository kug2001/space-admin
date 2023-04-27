import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';
import { curry, filter, fromPairs, head, lensProp, map, pipe, view } from 'ramda';
import {
  CreateFormConfig,
  ErrorState,
  FORM_MODE,
  FormConfig,
  ModalContextProps,
  Validation
} from '@/components/providers/formProvider/FormProvider.types';

export const createFormConfig = (configList: CreateFormConfig[]): FormConfig[] => {
  return configList.map((config, idx) => {
    const { stateInit } = config;
    return {
      ...config,
      idx,
      state: { ...stateInit },
      errorState: { isError: false, errorMsg: '' }
    };
  });
};

const FormContext = createContext<ModalContextProps>({} as ModalContextProps);

interface FormProviderProps {
  config: FormConfig[];
  page: FC<{ children: ReactNode }>;
  mode?: FORM_MODE;
}

export const FormProvider: FC<PropsWithChildren<FormProviderProps>> = props => {
  const { children, config, page: FormPages, mode = FORM_MODE.SPA } = props;
  const [configForm, setConfigForm] = useState<FormConfig[]>(config);
  const [isForm, setIsForm] = useState<boolean>(false);

  return (
    <FormContext.Provider
      value={{
        configForm,
        setConfigForm,
        setIsForm,
        initConfigs: [...config]
      }}
    >
      {mode ? (
        isForm ? (
          <FormPages>
            {configForm.map(({ formComponent: FormComponent, idx, title, formProps }) => (
              // eslint-disable-next-line react/jsx-key
              <FormComponent {...formProps} />
            ))}
          </FormPages>
        ) : (
          children
        )
      ) : (
        children
      )}
    </FormContext.Provider>
  );
};

export function usePageForm() {
  const { configForm, setIsForm, initConfigs, setConfigForm } =
    useContext<ModalContextProps>(FormContext);

  const formPageOpen = () => setIsForm(true);

  const formPageClose = () => {
    setConfigForm(initConfigs);
    setIsForm(false);
  };

  const allFormState = pipe(
    map<FormConfig, [string, any]>(({ key, state }) => [key, state]),
    fromPairs<any>
  )(configForm);

  const checkErrorForm = pipe(
    map<FormConfig, boolean>(({ errorState }) => errorState.isError),
    filter(item => item === true),
    v => v.length > 0
  )(configForm);

  return { formPageOpen, formPageClose, allFormState, checkErrorForm };
}

export function useForm<StateValue = any, Props = any>(formKey: string) {
  const { configForm, setConfigForm } = useContext<ModalContextProps>(FormContext);

  const getValidation = (value: string) => {
    const validation = pipe(
      filter<FormConfig>(item => item.key === formKey),
      head,
      view<FormConfig, Partial<Validation> | undefined>(lensProp('validation'))
    )(configForm);
    if (validation) {
      const { required, minLength, maxLength, pattern } = validation;
      if (pattern && !pattern.value.test(value))
        return { isError: true, errorMsg: pattern.message };
      else if (value.length === 0) return { isError: true, errorMsg: required || '' };
      else if (minLength && value.length < minLength.value)
        return { isError: true, errorMsg: minLength.message };
      else if (maxLength && value.length > maxLength.value)
        return { isError: true, errorMsg: maxLength.message };
      else return { isError: false, errorMsg: '' };
    }
  };

  /**
   * 폼의 정보들을 가져와서 상태값을 노출해주는 변수
   * @type {unknown}
   */
  const formState = pipe(
    filter<FormConfig>(item => item.key === formKey),
    head,
    view<FormConfig, StateValue>(lensProp('state'))
  )(configForm);

  const errorState = pipe(
    filter<FormConfig>(item => item.key === formKey),
    head,
    view<FormConfig, ErrorState>(lensProp('errorState'))
  )(configForm);

  const setErrorState = (value: string) => {
    const validation = getValidation(value);
    if (validation) {
      setConfigForm(prevState => {
        return map<FormConfig, FormConfig>(item => {
          if (item.key === formKey) {
            return { ...item, errorState: { ...validation } };
          } else {
            return { ...item };
          }
        })(prevState);
      });
    }
  };

  /**
   * 폼의 상태값을 변경하는 함수
   * @type {any}
   */
  const setFormSate = curry(
    (key: string, setState: Dispatch<SetStateAction<FormConfig[]>>) =>
      (value: Partial<StateValue>) => {
        setState(prevState => {
          return map<FormConfig, FormConfig>(item => {
            if (item.key === key) {
              const stateObj = { ...item.state };
              return { ...item, state: { ...stateObj, ...value } };
            } else {
              return { ...item };
            }
          })(prevState);
        });
      }
  )(formKey)(setConfigForm);

  return {
    formState,
    setFormSate,
    setErrorState,
    getValidation,
    errorState
  };
}
