import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Home } from '../index';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store'
import mockAxios from 'jest-mock-axios';
import { Provider } from 'react-redux';
interface IProviderProps {
  children?: React.ReactNode;
  store?: any;
}

const ReduxProvider = ({ children }: IProviderProps) => {
  const initialState = {
    data: {
      data: null
    },
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

describe('HomeScreen', () => {
  test('matches home screen snapshot', async () => {
    afterEach(() => {
      // cleaning up the mess left behind the previous test
      mockAxios.reset();
    });
    afterAll(() => { jest.useFakeTimers() })
    afterEach(cleanup)

    const tree = renderer
      .create(
        <ReduxProvider >
          <Home />
        </ReduxProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  });

})