import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  height: 100%;
  color:${({ theme }) => theme.colors.lightenText};
  z-index:2;
  
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(16)}px;
`;