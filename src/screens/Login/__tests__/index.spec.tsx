import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Login } from '../index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { store } from '@store/index'
import createSagaMiddleware from 'redux-saga';
import mockAxios from 'jest-mock-axios';
import 'jest-styled-components'
import { login } from '@store/slices/user';
interface IProviderProps {
  children?: React.ReactNode;
  store?: any;
}


const ReduxProvider = ({ children }: IProviderProps) => {
  const initialState = {
    data: null,
    error: null,
    statusCode: null,
    isLoading: false
  }
  const sagaMiddleware = createSagaMiddleware();

  const mockStore = configureStore([sagaMiddleware])(initialState)

  return (
    <Provider store={mockStore} >
      <ThemeProvider theme={theme} >
        {children}
      </ThemeProvider>
    </Provider>
  )
};

test('matches login screen snapshot', async () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  afterAll(() => { jest.useFakeTimers() })
  afterEach(cleanup)

  // const { getByTestId, debug } = render(<Login />, { wrapper: ReduxProvider })
  // const screenRender = getByTestId('login-screen')

  // console.log('screen render: ', screenRender)
  // console.log(debug)

  const tree = renderer
    .create(
      <ReduxProvider >
        <Login />
      </ReduxProvider>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
  // const FormInputRender = renderer
  //   .create(
  //     <Login />
  //     , { wrapper: ()=> ReduxProvider })
  //   .toJSON();

  // await expect(FormInputRender).toMatchSnapshot();
});