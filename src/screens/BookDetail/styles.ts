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
  font-size:${RFValue(18)}px;
`;

export const ContentContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex:1;
  margin: 0 40px;
`;

export const BookImageWrapper = styled.View`
  height:351px;
  margin-top:12px;

  justify-content:center;
  align-items:center;

  shadow-color: #000;
  shadow-offset: 3px 8px;
  shadow-opacity: 0.2;
  shadow-radius: 10.84px;
  elevation: 5;
`;

export const BookImage = styled.Image`
  height:100%;
  width:240px;
`;

export const ContentWrapper = styled.View``;

export const BookTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size:${RFValue(35)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color:${({ theme }) => theme.colors.darkText};
  flex-wrap:wrap;
  margin-top:24px;
`;

export const BookSubtitle = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.tertiary};
  font-family:${({ theme }) => theme.fonts.normal};
  line-height:20px;
`;

export const InformationContainer = styled.View`
  margin-top:35px;
`;

export const InformationHeader = styled.View`
  margin-bottom:15px;
`

export const InformationText = styled.Text`
  font-size:${RFValue(12)}px;
  font-family:${({ theme }) => theme.fonts.bold};

  color:${({ theme }) => theme.colors.darkText};

  line-height:20px;

`;

export const InformationWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InformationDataText = styled.Text`
  font-size:${RFValue(12)}px;
  font-family:${({ theme }) => theme.fonts.bold};

  color:${({ theme }) => theme.colors.darkOpacity300};
  line-height:20px;
`;

export const BookResumeContainer = styled.View`
  margin-top:18px;
  margin-bottom:30px;
`;

export const BookResumeIconWrapper = styled.View`
  margin-right: 5px
`;
