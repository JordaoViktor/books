import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

interface IButtonProps extends RectButtonProps {
  children?: React.ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return <Container>{children}</Container>;
}

