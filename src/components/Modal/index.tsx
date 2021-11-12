import React from 'react';
import { ModalBackground, ModalContainer, ModalFilter } from './styles';

interface Props {
  visible: boolean;
  onRequestClose: () => void;
  children?: React.ReactNode;
  accessible?: boolean;
  accessibilityLabel?: string;
}

export const Modal = ({ visible, children, ...rest }: Props) => (
  <ModalFilter {...rest} visible={visible} testID='modal'>
    <ModalBackground>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalBackground>
  </ModalFilter>
)
