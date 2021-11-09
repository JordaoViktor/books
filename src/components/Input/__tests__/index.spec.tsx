import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Input } from '../index';

interface IProviderProps {
  children?: React.ReactNode,
}

const Provider = ({ children }: IProviderProps) => (
  <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
);

describe('Input Component', () => {
  test('matches input snapshot', () => {

    const inputRender = renderer
      .create(
        <ThemeProvider theme={theme} >
          <Input />
        </ThemeProvider>)
      .toJSON();

    expect(inputRender).toMatchSnapshot();

  });

  it('ensure button receives some color', () => {
    const { getByTestId } = render(<Input color="#FAFA" />, { wrapper: Provider })

    const inputComponent = getByTestId('input')
    expect(inputComponent.props.style[0].color).toEqual("#FAFA")
  })

  it('ensure button receives do not some color', () => {
    const { getByTestId } = render(<Input />, { wrapper: Provider })

    const inputComponent = getByTestId('input')
    expect(inputComponent.props.style[0].color).toEqual("#FFFF")
  })
})