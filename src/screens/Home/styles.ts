import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex:1;
  background-color:${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 40px;
  width: 100%;

  flex-direction:row;
  align-items:center;

  justify-content:space-around;
  margin-top: ${ifIphoneX(20, 30)}px;

`;

export const HeaderLogoWrapper = styled.View`
  flex-direction: row;
  align-items:center;
  `;

export const Title = styled.Text`
  margin-left:16px;
  padding-bottom:45px;
  padding-top:-10px;
  
  font-family: ${({ theme }) => theme.fonts.light};
  font-size:${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.darkText};
  
`;

export const LogoutButton = styled(RectButton)`
  height: 32px;
  width: 32px;
  
  align-items: center;
  justify-content: center;

  border-radius: ${RFPercentage(50)}px;
  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.darkOpacity200};
`;

export const LogoutIcon = styled(Feather).attrs({
  name: 'log-out',
})`
  color:${({ theme }) => theme.colors.darkText};
  font-size:${RFValue(12)}px;
`

export const LogoutWrapper = styled.View`
  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.darkOpacity200};
  border-radius: ${RFPercentage(50)}px;
`;