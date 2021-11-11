import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { BookDetail } from '../index';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store'
import mockAxios from 'jest-mock-axios';
import { Provider } from 'react-redux';

import { useRoute } from "@react-navigation/core";
jest.mock("@react-navigation/core");
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

describe('BookDetail Screen', () => {
  test('matches BookDetail screen snapshot', async () => {
    afterEach(() => {
      // cleaning up the mess left behind the previous test
      mockAxios.reset();
    });
    afterAll(() => { jest.useFakeTimers() })
    afterEach(cleanup)
    const navigation = { navigate: jest.fn() };

    const tree = await renderer
      .create(
        <ReduxProvider >
          <BookDetail />
        </ReduxProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  });

})