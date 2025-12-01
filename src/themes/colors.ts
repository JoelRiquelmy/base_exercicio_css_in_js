import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    background: string
    text: string
  }
}

const colors = {
  primary: '#a7727d',
  secondary: '#f9f5e7',
  background: '#ffffff',
  text: '#eee'
}

export default colors
