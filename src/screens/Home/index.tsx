import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes';

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import { Button, Input, Modal } from '@components/index';

import {
  ModalWrapper,
  ModalCloseHeader,
  CloseIcon,
  ModalCategoryPick,
  ModalTitle,
  Container,
  Header,
  HeaderLogoWrapper,
  Title,
  LogoutButton,
  LogoutWrapper,
  LogoutIcon,
  SearchBarContainer,
  SearchBarWrapper,
  InputBody,
  InputWrapper,
  SearchIcon,
  FilterIcon,
  FilterIconButton,
  SearchIconButton
} from './styles';

type HomeScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme()
  const navigation = useNavigation<HomeScreenProps>()

  const handleModalInteraction = useCallback(() => {
    return setModalVisible(!modalVisible);
  }, [modalVisible]);

  const handleLogout = () => navigation.navigate('Login')

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Modal
        visible={modalVisible}
        onRequestClose={() => handleModalInteraction()}
      >
        <ModalWrapper>
          <ModalCloseHeader>
            <Button
              onPress={() => handleModalInteraction()}
              borderColor={theme.colors.darkOpacity300}
            >
              <CloseIcon />
            </Button>
          </ModalCloseHeader>

          <ModalCategoryPick>
            <ModalTitle>Selecione a categoria</ModalTitle>
          </ModalCategoryPick>
        </ModalWrapper>

      </Modal>

      <Container >
        <Header >
          <HeaderLogoWrapper >
            <IoasysLogo
              width={120}
              height={40}
              fill={theme.colors.darkText}
            />
            <Title>Books</Title>
          </HeaderLogoWrapper>

          <LogoutWrapper>
            <LogoutButton onPress={() => handleLogout()}>
              <LogoutIcon />
            </LogoutButton>
          </LogoutWrapper>
        </Header>

        <SearchBarContainer>
          <SearchBarWrapper>
            <InputBody>
              <InputWrapper>
                <Input
                  placeholderTextColor={theme.colors.darkOpacity200}
                  placeholder="Preocure um livro"
                  color={theme.colors.darkText}
                />
              </InputWrapper>
            </InputBody>

            <SearchIconButton>
              <SearchIcon />
            </SearchIconButton>

            <FilterIconButton onPress={() => handleModalInteraction()}>
              <FilterIcon />
            </FilterIconButton>
          </SearchBarWrapper>
        </SearchBarContainer>
      </Container>
    </>
  );
}

