import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label } from './styles';

interface IButtonProps extends TouchableOpacityProps {
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
    {...rest}
  >
    {label && <Label color={color}>{label}</Label>}
    {children}
  </Container>
)

