import theme from '@styles/theme';
import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';
interface Props extends TextInputProps {
  color?: string;
}

export const Input = ({ color, ...rest }: Props) => <Container testID='input' color={color}  {...rest} />
