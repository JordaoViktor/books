import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { Button } from '@components/Button';
import {
  Container,
  ExitContainer,
  ButtonWrapper,
  ArrowIcon,
  ContentContainer,
  BookImageWrapper,
  BookImage,
  ContentWrapper,
  BookTitle
} from './styles';
import { BookDetailDTO } from '@services/types';

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
  const { imageUrl, title } = params.item as BookDetailDTO

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

        </ContentWrapper>


      </ContentContainer>
    </Container>
  )
}
