import styled from 'styled-components/native';
import LoginBackground from '@assets/loginBackground.png'

export const BackgroundImage = styled.ImageBackground.attrs({
  source: LoginBackground,
  resizeMode: 'cover'
})`
  flex: 1;
  justify-content:center;
  align-items:center;
`;

export const Container = styled.SafeAreaView`
  width:90%;
  height:280px;

  
`;
