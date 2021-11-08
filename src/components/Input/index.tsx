import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

// type Props = TextInputProps

interface Props extends TextInputProps {
  color?: string;
}

export const Input = ({ color, ...rest }: Props) => <Container color={color}  {...rest} />
