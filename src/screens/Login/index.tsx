import React from 'react'
import { StatusBar, Keyboard, Alert } from 'react-native'
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { FormInput, Button } from '@components/index'

import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamListType } from '@routes/main.routes'
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
  ErrorWrapper,
  ButtonWrapper,
  ButtonText
} from './styles'
import { useTheme } from 'styled-components'
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { login } from '@store/slices/user'

interface IFormResponseProps {
  email?: string;
  password?: string;
}

type TValidationField = [
  (value: IFormResponseProps) => boolean | IFormResponseProps,
  void
]

type LoginScreenProps = StackNavigationProp<RootStackParamListType, 'Home'>

const schema = Yup.object().shape({
  email: Yup
    .string()
    .email('O email é obrigatório')
    .lowercase()
    .typeError('precisa por email')
    .required('O email é obrigatório'),
  password: Yup
    .string()
    .typeError('precisa por senha')
    .required('A senha é obrigatória')
})

export const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const navigation = useNavigation<LoginScreenProps>()
  const theme = useTheme()
  const dispatch = useReduxDispatch()

  const handleSignIn = (form: IFormResponseProps) => {
    navigation.navigate('Home')
    console.log(form)
    dispatch(login(form))
    // const isInvalid = (value: IFormResponseProps | string | undefined) => !value
    // const isValid = (value: IFormResponseProps) => !!value


    // const validationFields: TValidationField[] = [
    //   [isInvalid(form.email), Alert.alert("E-mail inválido")],
    //   [isInvalid(form.password), Alert.alert('Senha inválida')],
    //   [isInvalid(form), Alert.alert('Senha e email inválidos')],
    //   [isValid(form), Alert.alert('entrou')]
    // ]

    // const [_, alert] = validationFields.find(([iterationValue, fn]) => console.log(iterationValue) && iterationValue(form)) ?? []

    // // console.log(alert)

    // return alert
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
              <IoasysLogo
                width={120}
                height={40}
                fill={theme.colors.lightenText}
              />

              <Title>Books</Title>
            </Header>

            <InputWrapper marginTop={50}>
              <InputTitle>Email</InputTitle>
              <ErrorWrapper>
                <InputTitle>{errors && errors.email?.message}</InputTitle>
              </ErrorWrapper>


              <BackgroundInput>
                <FormInput
                  name="email"
                  control={control}
                  keyboardType="email-address"
                />
              </BackgroundInput>
            </InputWrapper>

            <InputWrapper marginTop={16}>
              <InputTitle>Senha</InputTitle>

              <ErrorWrapper>
                <InputTitle>{errors && errors.password?.message}</InputTitle>
              </ErrorWrapper>

              <BackgroundInput>
                <FormInput
                  name="password"
                  control={control}
                  secureTextEntry
                  autoCorrect={false}
                />

                <ButtonWrapper>
                  <Button onPress={handleSubmit(handleSignIn)}>
                    <ButtonText>Entrar</ButtonText>
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

