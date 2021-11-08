import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props extends TextInputProps {
  color?: string
}

export const Container = styled(TextInput) <Props>`
  width: 100%;
  height: 100%;
  color: ${({ theme, color }) => color ? color : theme.colors.lightenText};
  z-index:3;
  
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(16)}px;
  
`;