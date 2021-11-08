import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Label } from './styles';

interface IButtonProps extends RectButtonProps {
  children?: React.ReactNode,
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  label?: string;
  color?: string;
}

export const Button = ({ borderColor, label, color, backgroundColor, children, ...rest }: IButtonProps) => (
  <Container
    borderColor={borderColor}
    backgroundColor={backgroundColor}
    {...rest}>
    {label && <Label>{label}</Label>}
    {children}
  </Container>
)

