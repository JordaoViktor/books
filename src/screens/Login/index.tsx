import React from 'react'
import { StatusBar, Keyboard, Alert } from 'react-native'

import { useForm } from "react-hook-form"
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { useReduxDispatch } from '@hooks/useReduxDispatch'

import { login } from '@store/slices/user'

import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListType } from '@routes/main.routes'

import IoasysLogo from '@assets/svg/ioasysLogo.svg'

import { FormInput, Button } from '@components/index'

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
} from './styles'

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
    .typeError('precisa por o email')
    .required('O email é obrigatório'),
  password: Yup
    .string()
    .typeError('precisa por a senha')
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

    const isInvalid = (value: IFormResponseProps | string | undefined) => !value
    const isValid = (value: IFormResponseProps) => !!value


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

      <KeyboardDismiss onPress={Keyboard.dismiss} testID='login-screen'>
        <BackgroundImage>
          <Container>
            <Header accessible accessibilityLabel='Ioasys Books'>
              <IoasysLogo
                width={120}
                height={40}
                fill={theme.colors.lightenText}
                accessibilityLabel='Ioasys'
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
                  accessible
                  autoCapitalize="none"
                  accessibilityLabel='Email address input'
                />
              </BackgroundInput>
            </InputWrapper>

            <InputWrapper marginTop={16}>
              <InputTitle>Senha</InputTitle>

              <ErrorWrapper>
                <InputTitle
                  accessible
                  accessibilityValue={{ text: errors ? `${errors.password?.message}` : '' }}
                >
                  {errors && errors.password?.message}
                </InputTitle>
              </ErrorWrapper>

              <BackgroundInput>
                <FormInput
                  name="password"
                  control={control}
                  secureTextEntry
                  autoCorrect={false}
                  accessibilityLabel='Password input'
                />

                <ButtonWrapper>
                  <Button
                    color={theme.colors.tertiary}
                    label="Entrar"
                    onPress={handleSubmit(handleSignIn)}
                    accessibilityLabel='Sign in Button'
                  >
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

