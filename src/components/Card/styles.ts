import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width:100%;
  min-height:160px;

  background-color: ${({ theme }) => theme.colors.primary};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-bottom:16px;
`;

export const CardWrapper = styled.View`
  margin: 19px 19px 16px 16px;
  flex-direction: row;
  justify-content:space-around;

`;

export const BookImage = styled.Image.attrs({
  resizeMode: 'cover',

})`
  height:132px;
  width: 81px;
`;

export const BookInformationContainer = styled.View`
  margin-left:16px;
  justify-content:space-between;
`;

export const BookInformationHeader = styled.View`
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size:${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.darkText};
  line-height: 20px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(12)}px;

  flex-wrap:wrap;
  width:130px;
  color: ${({ theme }) => theme.colors.tertiary};
  line-height: 20px;
`;

export const BookInformationWrapper = styled.View`

`;

export const BookInformationText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size:${RFValue(14)}px;

  flex-wrap:wrap;
  width:130px;
  color: ${({ theme }) => theme.colors.darkOpacity300};
  line-height: 20px;
`;
