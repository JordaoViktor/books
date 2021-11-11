import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useReduxDispatch, useReduxSelector } from '@hooks/index';
import { fetchBooks } from '@store/slices/books';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes';

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import { Button, Input, Modal, Card } from '@components/index';

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
  SearchIconButton,
  CardsContainer
} from './styles';

type HomeScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>
type BookDetailScreenProps = StackNavigationProp<RootStackParamListType, 'BookDetail'>

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useReduxDispatch()
  const books = useReduxSelector((store) => store.books?.data?.data)
  const theme = useTheme()
  const navigation = useNavigation<HomeScreenProps | BookDetailScreenProps>()

  const handleModalInteraction = useCallback(() => setModalVisible(!modalVisible), [modalVisible]);

  const handleLogout = () => navigation.navigate('Login')
  console.log(books)
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

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
        accessible
        accessibilityLabel='Modal'
      >
        <ModalWrapper >
          <ModalCloseHeader>
            <Button
              accessible
              accessibilityLabel='Close modal'
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

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header
            accessible
            accessibilityLabel='Ioasys Books'
          >
            <HeaderLogoWrapper >
              <IoasysLogo
                width={120}
                height={40}
                fill={theme.colors.darkText}
                accessible
                accessibilityLabel='Ioasys'
              />
              <Title>Books</Title>
            </HeaderLogoWrapper>

            <LogoutWrapper>
              <LogoutButton
                accessible
                accessibilityLabel='Logout Button'
                onPress={() => handleLogout()}>
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
                    accessible
                    accessibilityLabel='Search a book input'
                  />
                </InputWrapper>
              </InputBody>

              <SearchIconButton
                accessible
                accessibilityLabel='Search Button'
              >
                <SearchIcon />
              </SearchIconButton>

              <FilterIconButton
                accessible
                accessibilityLabel='Filter Button'
                onPress={() => handleModalInteraction()}>
                <FilterIcon />
              </FilterIconButton>
            </SearchBarWrapper>
          </SearchBarContainer>
          <CardsContainer>
            <FlatList
              data={books}
              keyExtractor={(item) => String(item?.id)}
              renderItem={({ item }) => <Card onPress={() => { navigation.navigate('BookDetail', { params: { item } }) }}  {...item} />}
            />
          </CardsContainer>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}

