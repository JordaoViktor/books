import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Button } from '../index';

describe('Button component', () => {

  it('should match a snapshot', () => {
    const FormInputRender = renderer
      .create(
        <ThemeProvider theme={theme} >
          <Button />
        </ThemeProvider>)
      .toJSON();

    expect(FormInputRender).toMatchSnapshot();
  })
});