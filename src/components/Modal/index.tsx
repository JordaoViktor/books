import React from 'react';
import { ModalBackground, ModalContainer, ModalFilter } from './styles';

interface Props {
  visible: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({ visible, children, ...rest }: Props) => {
  return (
    <ModalFilter {...rest} visible={visible}>
      <ModalBackground>
        <ModalContainer>
          {children}
        </ModalContainer>
      </ModalBackground>
    </ModalFilter>
  )
}

