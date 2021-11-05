import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  padding: 9px;
  height: 36px;
  width: 100%;
  justify-content:center;
  align-items:center;


  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px
`;
