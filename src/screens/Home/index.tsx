import React from 'react';
import { StatusBar, View } from 'react-native';
import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import {
  Container,
  Header,
  HeaderLogoWrapper,
  Title,
  LogoutButton,
  LogoutWrapper,
  LogoutIcon
} from './styles';
import { useTheme } from 'styled-components/native';

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
      </Container>
    </>
  );
}

