import styled from 'styled-components'

export const Card = styled.li`
  border: 1px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  $:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }
`

export const CardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const CardLink = styled.a`
  border-color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    border-color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
