import { Dispatch, FC, SetStateAction } from 'react';

export interface ValidationValue<T> {
  value: T;
  message: string;
}

export interface Validation {
  required: string;
  minLength: ValidationValue<number>;
  maxLength: ValidationValue<number>;
  pattern: ValidationValue<RegExp>;
}

export interface CreateFormConfig {
  key: string;
  title: string;
  formComponent: FC<any>;
  stateInit?: any;
  formProps?: any;
  validation?: Partial<Validation>;
}

export type ErrorState = {
  isError: boolean;
  errorMsg: string;
};

export interface FormConfig extends CreateFormConfig {
  idx: number;
  state: any;
  errorState: ErrorState;
}

export enum FORM_MODE {
  SPA = 'spa',
  ROUTE = 'route'
}

export interface ModalContextProps {
  configForm: FormConfig[];
  setConfigForm: Dispatch<SetStateAction<FormConfig[]>>;
  setIsForm: Dispatch<SetStateAction<boolean>>;
  initConfigs: FormConfig[];
}
