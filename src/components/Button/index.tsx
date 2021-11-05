import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

export const Button: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
}

