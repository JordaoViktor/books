import React from 'react'
import { StatusBar, Keyboard } from 'react-native'
import { useForm } from "react-hook-form"

import { FormInput, Button } from '@components/index'

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import {
  KeyboardDismiss,
  BackgroundImage,
  Container,
  Header,
  Title,
  BackgroundInput,
  InputWrapper,
  InputTitle,
  ButtonWrapper,
  ButtonText
} from './styles'

interface IFormResponseProps {
  email: string;
  password: string;
}

export const Login = () => {
  const { control, handleSubmit } = useForm()

  const handleSignIn = (form: IFormResponseProps) => {
    console.log(form)
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <KeyboardDismiss onPress={Keyboard.dismiss}>
        <BackgroundImage>
          <Container>
            <Header>
              <IoasysLogo width={120} height={40} />
              <Title>Books</Title>
            </Header>


            <InputWrapper marginTop={50}>
              <InputTitle>Email</InputTitle>

              <BackgroundInput>
                <FormInput
                  control={control}
                  name="email"
                />
              </BackgroundInput>
            </InputWrapper>

            <InputWrapper marginTop={16}>
              <InputTitle>Senha</InputTitle>

              <BackgroundInput>
                <FormInput
                  control={control}
                  name="password"
                  secureTextEntry
                />

                <ButtonWrapper>
                  <Button>
                    <ButtonText>Hello</ButtonText>
                  </Button>
                </ButtonWrapper>
              </BackgroundInput>
            </InputWrapper>
          </Container>
        </BackgroundImage>
      </KeyboardDismiss>
    </>
  );
}

