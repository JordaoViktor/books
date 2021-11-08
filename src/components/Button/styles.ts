import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface IButtonProps extends RectButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
}

export const Container = styled(RectButton) <IButtonProps>`
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
  color: ${({ theme, color }) => color ? color : theme.colors.darkText}
`;