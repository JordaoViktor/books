import React from 'react'
import { Controller } from "react-hook-form"
import {
  KeyboardDismiss,
  BackgroundImage,
  Container,
  Header,
  Title,
  BackgroundInput,
  InputWrapper,
  InputTitle,
} from './styles'

import { Input } from '@components/index'
import { StatusBar, Keyboard } from 'react-native'
import IoasysLogo from '@assets/svg/ioasysLogo.svg'

export const Login = () => {


  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <KeyboardDismiss onPress={Keyboard.dismiss}>
        <BackgroundImage>
          <Container >
            <Header>
              <IoasysLogo width={120} height={40} />
              <Title>Books</Title>
            </Header>

            <InputWrapper marginTop={50}>
              <InputTitle>Email</InputTitle>

              <BackgroundInput>
                <Input />
              </BackgroundInput>
            </InputWrapper>

            <InputWrapper marginTop={16}>
              <InputTitle>Senha</InputTitle>

              <BackgroundInput>
                <Input secureTextEntry />
              </BackgroundInput>
            </InputWrapper>
          </Container>
        </BackgroundImage>
      </KeyboardDismiss>
    </>
  );
}

