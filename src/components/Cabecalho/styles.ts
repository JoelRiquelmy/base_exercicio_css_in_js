import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  text-align: center;
  padding: 24px 0;
`