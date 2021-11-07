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
  font-family: ${({ theme }) => theme.fonts.light};
  font-size:${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.lightenText};

  margin-left:16px;
  padding-bottom:45px;
`;

export const InputWrapper = styled.View<IInputWrapperProps>`
  margin-top:${({ marginTop }) => marginTop ?? 0}px;
  background-color: ${({ theme }) => theme.colors.darkOpacity300};
  
  border-radius: 4px;
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
  color: ${({ theme }) => theme.colors.lightenText};
  opacity: 0.5;
  
  font-family:${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(12)}px;
  
  position:absolute ;

  padding: 8px 0 0 15px;
  margin-bottom: 5px;
`;

export const ErrorWrapper = styled.View`
  margin-left:50px;
`;

export const ButtonWrapper = styled.View`
  width:85px;
  
  margin-left: -100px;
`;

export const ButtonText = styled.Text`
  font-family:${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(16)}px;

  text-align:center;
  color:${({ theme }) => theme.colors.tertiary};
  padding-bottom:22px;
`;