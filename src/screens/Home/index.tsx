import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import { Input } from '@components/Input';

import {
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

  const theme = useTheme()
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

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

            <FilterIconButton>
              <FilterIcon />
            </FilterIconButton>
          </SearchBarWrapper>
        </SearchBarContainer>
      </Container>
    </>
  );
}

