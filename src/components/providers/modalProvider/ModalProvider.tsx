import React, { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { filter, head, lensProp, pipe, view } from 'ramda';
import {
  ConfigModal,
  CreateConfigModalProps,
  ModalContextProps,
  ModalProviderProps
} from '@/components/providers/modalProvider/ModalProvider.types';

/**
 * Modal 데이터를 출력하는 함수
 * @param configProps
 */
export const createConfigModal = (configProps: CreateConfigModalProps[]): ConfigModal[] => {
  return configProps.map(({ key, component, props }, idx) => ({
    key,
    component,
    idx,
    isShow: false,
    props
  }));
};

const ModalContext = createContext<ModalContextProps>({
  config: [],
  setUserProps: () => {},
  setModalKey: () => {}
});

export const ModalProvider: FC<PropsWithChildren<ModalProviderProps>> = props => {
  const { children, config } = props;
  const [modalKey, setModalKey] = useState<string>('');
  const [userProps, setUserProps] = useState<any>({});

  const Component = pipe(
    filter<ConfigModal>(item => item.key === modalKey),
    head,
    view<ConfigModal, React.FC<any>>(lensProp('component'))
  )(config);

  const componentProps = pipe(
    filter<ConfigModal>(item => item.key === modalKey),
    head,
    view<ConfigModal, React.FC<any>>(lensProp('props'))
  )(config);

  const closeModal = () => {
    setModalKey('');
  };

  return (
    <ModalContext.Provider value={{ config, setUserProps, setModalKey }}>
      <>
        {children}
        {Component && <Component {...componentProps} {...userProps} />}
      </>
    </ModalContext.Provider>
  );
};

export function useModal<P = {}, V = {}>(modalKey: string) {
  const { config, setUserProps, setModalKey } = useContext<ModalContextProps>(ModalContext);

  const modalProps = pipe(
    filter<ConfigModal>(item => item.key === modalKey),
    head,
    view<ConfigModal, P>(lensProp('props'))
  )(config);

  const openModal = <T,>(userProps: T) => {
    setModalKey(modalKey);
    setUserProps(userProps);
  };

  const closeModal = (): void => {
    setModalKey('');
    setUserProps({});
  };

  return { openModal, closeModal, modalProps };
}
