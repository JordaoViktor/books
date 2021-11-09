import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@styles/theme'
import { Modal } from '../index';

interface IProviderProps {
  children?: React.ReactNode,
}

const Provider = ({ children }: IProviderProps) => (
  <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
);

describe('Input Component', () => {
  test('matches modal snapshot', () => {
    const onRequestCloseMock = jest.fn();

    const modalRender = renderer
      .create(
        <ThemeProvider theme={theme} >
          <Modal visible={true} onRequestClose={onRequestCloseMock} />
        </ThemeProvider>)
      .toJSON();

    expect(modalRender).toMatchSnapshot();

  });

  it('ensure modal receives visible prop false', () => {
    const onRequestCloseMock = jest.fn();
    const { getByTestId } = render(<Modal visible={false} onRequestClose={onRequestCloseMock} />, { wrapper: Provider })

    const modalComponent = getByTestId('modal')

    expect(modalComponent.props.visible).toBeFalsy()
  })

  it('ensure button receives do not some color', () => {
    const onRequestCloseMock = jest.fn();
    const { getByTestId } = render(<Modal visible={true} onRequestClose={onRequestCloseMock} />, { wrapper: Provider })

    const modalComponent = getByTestId('modal')

    expect(modalComponent.props.visible).toBeTruthy()
  })
})