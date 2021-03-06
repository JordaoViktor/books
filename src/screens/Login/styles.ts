import styled from 'styled-components/native';
import LoginBackground from '@assets/loginBackground.png'
import { RFValue } from 'react-native-responsive-fontsize';

interface IInputWrapperProps {
  marginTop?: number;
}

export const KeyboardDismiss = styled.TouchableWithoutFeedback`
  flex:1;
`;

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

export const Header = styled.View`
  width: 100%;
  height: 40px;

  flex-direction:row;
  align-items:center;
`;

export const Title = styled.Text`
  margin-left:16px;

  font-family: ${({ theme }) => theme.fonts.light};
  font-size:${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.lightenText};
`;

export const InputWrapper = styled.View<IInputWrapperProps>`
  margin-top:${({ marginTop }) => marginTop ?? 0}px;
  border-radius: 4px;
  
  background-color: ${({ theme }) => theme.colors.darkOpacity300};
`;

export const BackgroundInput = styled.View`
  width: 100%;
  height:60px;
  opacity:1;
  
  flex-direction:row;

  padding-left: 15px;
  padding-top:15px;
`;

export const InputTitle = styled.Text`
  padding: 8px 0 0 15px;
  margin-bottom: 5px;
  position:absolute ;
  
  font-family:${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(12)}px;
  
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.lightenText};
`;

export const ErrorWrapper = styled.View`
  margin-left:50px;
`;

export const ButtonWrapper = styled.View`
  width:85px;
  margin-left: -100px;
  z-index:4;
  
`;

