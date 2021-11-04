import React from 'react';
import { TextInputProps, View } from 'react-native';
import { Control, Controller } from 'react-hook-form'

import { Container, InputText } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputForm = ({ control, name, ...rest }: Props) => (
  <Container>

    <InputText />

  </Container>
)


