import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, Keyboard, StatusBar, TouchableWithoutFeedback, Text } from 'react-native';

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useReduxDispatch, useReduxSelector } from '@hooks/index';
import { fetchBooks } from '@store/slices/books';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes';

import IoasysLogo from '@assets/svg/ioasysLogo.svg'
import { BookDetailDTO } from '@services/types';

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
  CardsContainer,
  SelectButtonContainer,
  ButtonWrapper,
  ModalCloseFooter,
  ModalCloseButton,
  ButtonText
} from './styles';
import { categoryConstants } from './constants/category';

type HomeScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>
type BookDetailScreenProps = StackNavigationProp<RootStackParamListType, 'BookDetail'>


export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryData, setCategoryData] = useState([])
  const dispatch = useReduxDispatch()
  const books = useReduxSelector((store) => store.books?.data?.data)
  const theme = useTheme()
  const navigation = useNavigation<HomeScreenProps | BookDetailScreenProps>()

  const handleModalInteraction = useCallback(() => setModalVisible(!modalVisible), [modalVisible]);

  const handleLogout = () => navigation.navigate('Login')

  const handleNavigateBookDetails = (item: BookDetailDTO) => navigation.navigate('BookDetail', { params: { item } })

  const isButtonActive = (item: string) => categoryData?.includes(item)

  const handleButtonPress = (item: string[] | never) => {
    const handleActiveButton = (evt: string | never) => {
      if (!categoryData.includes(evt)) {
        return [...categoryData, evt];
      }

      return [
        ...categoryData.filter(ref => ref !== evt)
      ]
    }

    return setCategoryData(handleActiveButton(item))
  };

  const handleFetchBooks = (categoryQuery = '') => dispatch(fetchBooks(categoryQuery))

  const handleFilterBooks = (item = '') => {
    handleFetchBooks(item)
    handleModalInteraction()
  }

  useEffect(() => {
    handleFetchBooks()
  }, [dispatch])

  console.log('category:', categoryData.join('%2C'))
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
        <ModalWrapper>
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

          <SelectButtonContainer>
            {categoryConstants.map(categoryItem => {
              const active = !!isButtonActive(categoryItem.query)

              return (
                <ButtonWrapper key={categoryItem.id}>
                  <Button
                    borderColor={theme.colors.darkOpacity300}
                    onPress={() => handleButtonPress(categoryItem.query)}
                    backgroundColor={active ? theme.colors.darkText : theme.colors.primary}
                  >
                    <ButtonText color={active ? theme.colors.primary : theme.colors.darkText}>
                      {categoryItem.name}
                    </ButtonText>
                  </Button>
                </ButtonWrapper>
              )
            })}
          </SelectButtonContainer>

          <ModalCloseFooter>
            <ModalCloseButton>
              <Button
                label="Filtrar"
                borderColor={theme.colors.tertiary}
                color={theme.colors.tertiary}
                onPress={() => handleFilterBooks(categoryData.join('&category='))}
              />
            </ModalCloseButton>
          </ModalCloseFooter>
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
              renderItem={({ item }) => <Card onPress={() => handleNavigateBookDetails(item)}  {...item} />}
            />
          </CardsContainer>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}

