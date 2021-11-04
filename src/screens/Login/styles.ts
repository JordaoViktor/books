import styled from 'styled-components/native';
import LoginBackground from '@assets/loginBackground.png'

export const Container = styled.ImageBackground.attrs({
  source: LoginBackground
})`
  flex: 1;
`;
