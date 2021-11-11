import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ExitContainer = styled.View`
  height:36px;
  width:100%;
  margin-top: ${ifIphoneX(20, 30)}px;
  
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width:35px;
  height:35px;
  margin-left:16px;
  
`;

export const ArrowIcon = styled(Feather).attrs({
  name: 'arrow-left'
})`
  color:${({ theme }) => theme.colors.darkText};
  font-size:${RFValue(25)}px;
  padding-bottom:20px;
  padding-right:20px;
`;

export const ContentContainer = styled.ScrollView`
  flex:1;

  margin: 0 40px;
`;

export const BookImageWrapper = styled.View`
  width:240px;
  height:351px;
  margin-top:12px;

  shadow-color: #000;
  shadow-offset: 3px 8px;
  shadow-opacity: 0.2;
  shadow-radius: 10.84px;
  elevation: 5;

 
`;

export const BookImage = styled.Image`
  width:100%;
  height:100%;
`;

export const ContentWrapper = styled.View`

`;

export const BookTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size:${RFValue(35)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color:${({ theme }) => theme.colors.darkText};
  flex-wrap:wrap;
  margin-top:24px;
  
`;