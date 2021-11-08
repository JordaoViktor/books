import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import { Button, Input, Modal } from '@components/index';

import {
  ModalWrapper,
  ModalCloseHeader,
  CloseIcon,
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

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme()

  const handleModalInteraction = useCallback(() => {
    return setModalVisible(!modalVisible);
  }, [modalVisible]);

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
            <LogoutButton>
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

