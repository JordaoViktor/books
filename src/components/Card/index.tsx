import React, { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  CardWrapper,
  BookImage,
  BookInformationContainer,
  BookInformationHeader,
  BookInformationWrapper,
  Title,
  SubTitle,
  BookInformationText
} from './styles';

interface ICardProps extends TouchableOpacityProps {
  title: string;
  authors: string[];
  category: string
  description: string;
  pageCount: string;
  publisher: string;
  published: string;
  imageUrl: string;
}

export const Card = ({
  title,
  authors,
  category,
  description,
  imageUrl,
  pageCount,
  published,
  publisher,
  ...rest }: ICardProps) => (
  <Container {...rest}>
    <CardWrapper>
      <BookImage source={{ uri: imageUrl }} />
      <BookInformationContainer>
        <BookInformationHeader>
          <Title>{title}</Title>
          <SubTitle>{authors}</SubTitle>

        </BookInformationHeader>

        <BookInformationWrapper>
          <BookInformationText>{pageCount} páginas</BookInformationText>
          <BookInformationText>Editora {publisher}</BookInformationText>
          <BookInformationText>Publicado em{published}</BookInformationText>
        </BookInformationWrapper>
      </BookInformationContainer>
    </CardWrapper>
  </Container>
)

