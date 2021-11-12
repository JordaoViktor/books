import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { Feather, Ionicons } from '@expo/vector-icons';
import { RectButton, BorderlessButton, RectButtonProps } from 'react-native-gesture-handler';

interface LogoutProps extends RectButtonProps {
  accessible: boolean;
  accessibilityLabel: string;
}
interface ButtonText {
  color?: string;
}
interface FilterButtonProps extends RectButtonProps {
  accessible: boolean;
  accessibilityLabel: string;
}
export const ModalWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin: 16px 16px 16px 16px;
  background-color: ${({ theme }) => theme.colors.primary};

  `;

export const ModalCloseHeader = styled.View`
  flex-direction:row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const CloseIcon = styled(Feather).attrs({
  name: 'x'
})`
  color:${({ theme }) => theme.colors.darkText};
  font-size:${RFValue(16)}px;
`;

export const ModalCategoryPick = styled.View`
  margin-bottom:10px;
`;

export const SelectButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap:wrap;
`;

export const ButtonWrapper = styled.View`
  margin:4px 2px;
`;

export const ButtonText = styled.Text<ButtonText>`
  font-size:${RFValue(12)}px;
  font-family:${({ theme }) => theme.fonts.normal};
  color:${({ theme, color }) => color ? color : theme.colors.darkText}
`;

export const ModalTitle = styled.Text`
  color:${({ theme }) => theme.colors.darkText};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;

`;

export const ModalCloseFooter = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items:center;
`;

export const ModalCloseButton = styled.View`
  width:91px;
  height:36px;
`


export const Container = styled.SafeAreaView`
  flex:1;
  background-color:${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 40px;
  width: 100%;

  flex-direction:row;
  align-items:center;
  
  justify-content:space-between;
  margin-top: ${ifIphoneX(20, 30)}px;
  margin-bottom:34px;
`;

export const HeaderLogoWrapper = styled.View`
  flex-direction: row;
  align-items:center;
  margin-left:16px;

  `;

export const Title = styled.Text`
  margin-left:16px;

  font-family: ${({ theme }) => theme.fonts.light};
  font-size:${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.darkText};
  
  `;

export const LogoutButton = styled(RectButton) <LogoutProps>`
  height: 32px;
  width: 32px;
  
  align-items: center;
  justify-content: center;

  border-radius: ${RFPercentage(50)}px;
  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.darkOpacity200};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoutIcon = styled(Feather).attrs({
  name: 'log-out',
})`
  color:${({ theme }) => theme.colors.darkText};
  font-size:${RFValue(16)}px;
`

export const LogoutWrapper = styled.View`
  margin-right:16px;

  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.darkOpacity200};
  border-radius: ${RFPercentage(50)}px;
`;

export const SearchBarContainer = styled.View`
  width:100%;
  height:50px;
`;

export const SearchBarWrapper = styled.View`
  margin: 0 16px 0 16px;
  flex-direction:row;
  align-items:center; 
`;

export const InputBody = styled.View`
  border-width: 1px;
  flex-direction:row;
  border-color: ${({ theme }) => theme.colors.darkOpacity200};
  width:90%;
  height:48px;
  align-items:center;
`;

export const InputWrapper = styled.View`
  width:90%;
  margin-left:11px;
`;

export const SearchIconButton = styled.TouchableOpacity`
  z-index:5;
`;

export const SearchIcon = styled(Feather).attrs({
  name: 'search'
})`
  color:${({ theme }) => theme.colors.darkText};
  margin-left:-32px;
  font-size:${RFValue(20)}px;
`;

export const FilterIconButton = styled.TouchableOpacity <FilterButtonProps>`
  padding-left:10px;
`;

export const FilterIcon = styled(Ionicons).attrs({
  name: 'options-outline'
})`
  font-size:${RFValue(22)}px;
`

export const CardsContainer = styled.View`
  width:100%;
  height:100%;

  margin: 32px 16px 0 16px;
`;
