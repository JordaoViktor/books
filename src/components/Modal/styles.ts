import styled from 'styled-components/native'

export const ModalFilter = styled.Modal.attrs({
  animationType: "fade",
  transparent: true
})``;

export const ModalBackground = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  justify-content:center;
  align-items:center;
  background-color: ${({ theme }) => theme.colors.darkOpacity400};
`;

export const ModalContainer = styled.View`
  width:90%;
  margin-top:50px;
  min-height:70%;
  border-radius:4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;