import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { BookDetailDTO } from '@services/types';

import { Button } from '@components/Button';
import QuoteIcon from '@assets/svg/quote.svg'
import {
  Container,
  ExitContainer,
  ButtonWrapper,
  ArrowIcon,
  ContentContainer,
  BookImageWrapper,
  BookImage,
  ContentWrapper,
  BookTitle,
  BookSubtitle,
  InformationContainer,
  InformationHeader,
  InformationText,
  InformationWrapper,
  InformationDataText,
  BookResumeContainer,
  BookResumeIconWrapper
} from './styles';

interface IRouteParamsProps {
  params: {
    item: BookDetailDTO | undefined
  }
}
export const BookDetail = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute() as {
    params: IRouteParamsProps
  }

  const {
    params
  } = route?.params
  // const { imageUrl, title } = params!.item || {} as BookDetailDTO
  const imageUrl = params?.item?.imageUrl
  const title = params?.item?.title
  const authors = params?.item?.authors.join(', ')
  const pageCount = params?.item?.pageCount
  const published = params?.item?.published
  const publisher = params?.item?.publisher
  const language = params?.item?.language
  const isbn10 = params?.item?.isbn10
  const isbn13 = params?.item?.isbn13
  const category = params?.item?.category
  const description = params?.item?.description


  const handlePreviousPage = () => navigation.goBack()

  return (
    <Container>
      <ExitContainer>
        <ButtonWrapper>
          <Button
            accessible
            accessibilityLabel='Previous page'
            borderColor={theme.colors.darkOpacity300}
            onPress={handlePreviousPage}
          >
            <ArrowIcon />
          </Button>
        </ButtonWrapper>
      </ExitContainer>

      <ContentContainer>
        <BookImageWrapper>
          <BookImage source={{ uri: imageUrl }} />
        </BookImageWrapper>

        <ContentWrapper>
          <BookTitle>{title}</BookTitle>
          <BookSubtitle>{authors}</BookSubtitle>
        </ContentWrapper>

        <InformationContainer>
          <InformationHeader>
            <InformationText>INFORMAÇÕES</InformationText>
          </InformationHeader>

          <InformationWrapper >
            <InformationText>Páginas</InformationText>
            <InformationDataText>{pageCount}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper >
            <InformationText>Editora</InformationText>
            <InformationDataText>{publisher}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper>
            <InformationText>Publicação</InformationText>
            <InformationDataText>{published}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper >
            <InformationText>Idioma</InformationText>
            <InformationDataText>{language}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper >
            <InformationText>Título Original</InformationText>
            <InformationDataText>{title}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper >
            <InformationText>ISBN-10</InformationText>
            <InformationDataText>{isbn10}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper>
            <InformationText>ISBN-13</InformationText>
            <InformationDataText>{isbn13}</InformationDataText>
          </InformationWrapper>

          <InformationWrapper >
            <InformationText>Categoria</InformationText>
            <InformationDataText>{category}</InformationDataText>
          </InformationWrapper>

        </InformationContainer>

        <BookResumeContainer>
          <InformationHeader>
            <InformationText>RESENHA DA EDITORA</InformationText>
          </InformationHeader>

          <InformationDataText>
            <BookResumeIconWrapper>
              <QuoteIcon />
            </BookResumeIconWrapper>{description}</InformationDataText>
        </BookResumeContainer>
      </ContentContainer>
    </Container>
  )
}
