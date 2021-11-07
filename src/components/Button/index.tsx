import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

interface IButtonProps extends RectButtonProps {
  children?: React.ReactNode,
  onPress?: () => void;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return <Container {...rest}>{children}</Container>;
}

