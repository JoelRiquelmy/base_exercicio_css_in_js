import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    & > button {
      margin-top: 16px;
      width: 100%;
      margin-left: 0;
    }
  }
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.primary};
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.primary};
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.secondary};
  margin-left: 8px;
  cursor: pointer;
`
