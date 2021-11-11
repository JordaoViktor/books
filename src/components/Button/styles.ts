import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps } from 'react-native';
interface IButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  label?: string;
}

export const Container = styled.TouchableOpacity<IButtonProps>`
  padding: 9px;
  height: 36px;
  
  justify-content:center;
  align-items:center;
  
  border-radius: 20px;
  border-width:1px;

  border-color: ${({ theme, borderColor }) => borderColor
    ? borderColor
    : theme.colors.transparent};
    
  background-color: ${({ theme, backgroundColor }) => backgroundColor
    ? backgroundColor
    : theme.colors.primary};
`;

export const Label = styled.Text<IButtonProps>`
  justify-content:center;
  align-items:center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(16)}px;
  text-align: center;
  color: ${({ theme, color }) => color ? color : theme.colors.darkText};
  margin-top:-2px;
`;