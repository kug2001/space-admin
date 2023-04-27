import { Dispatch, FC, SetStateAction } from 'react';

export interface ModalContextProps {
  config: ConfigModal[];
  setUserProps: Dispatch<SetStateAction<any>>;
  setModalKey: Dispatch<SetStateAction<string>>;
}

export interface ModalProviderProps {
  config: ConfigModal[];
}

export interface CreateConfigModalProps {
  key: string;
  component: FC<any>;
  props?: any;
}

export interface ConfigModal extends CreateConfigModalProps {
  idx: number;
  isShow: boolean;
}
