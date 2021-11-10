// import React from 'react';
// import renderer from 'react-test-renderer';
// import { render, cleanup } from '@testing-library/react-native'
// import { ThemeProvider } from 'styled-components/native'
// import theme from '@styles/theme'
// import { Login } from '../index';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store'
// import { store } from '@store/index'
// import createSagaMiddleware from 'redux-saga';
// interface IProviderProps {
//   children?: React.ReactNode;
//   store?: any;
// }
// jest.useFakeTimers()

// const ReduxProvider = ({ children }: IProviderProps) => {
//   const initialState = {
//     data: null,
//     error: null,
//     statusCode: null,
//     isLoading: false
//   }
//   const sagaMiddleware = createSagaMiddleware();

//   const mockStore = configureStore([sagaMiddleware])(initialState)

//   return (
//     <Provider store={mockStore} >
//       {children}
//     </Provider>
//   )
// };

// test('matches home screen snapshot', async () => {
//   afterEach(cleanup)
//   const FormInputRender = renderer
//     .create(
//       <ReduxProvider>
//         <ThemeProvider theme={theme} >
//           <Login />
//         </ThemeProvider>
//       </ReduxProvider>)
//     .toJSON();

//   await expect(FormInputRender).toMatchSnapshot();
// });