import React from 'react'
import { Controller } from "react-hook-form"
import { BackgroundImage, Container } from './styles'
import { InputForm } from '@components/index'
import { StatusBar } from 'react-native'
import IoasysLogo from '@assets/svg/ioasysLogo.svg'

export const Login = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <BackgroundImage>
        <Container >
          <IoasysLogo width={120} height={40} />

        </Container>
      </BackgroundImage>
    </>
  );
}

