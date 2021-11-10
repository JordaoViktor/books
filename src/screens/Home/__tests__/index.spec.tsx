import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Home } from '../index';

test('matches home screen snapshot', async () => {
  const FormInputRender = renderer
    .create(
      <ThemeProvider theme={theme} >
        <Home />
      </ThemeProvider>)
    .toJSON();

  await expect(FormInputRender).toMatchSnapshot();
});