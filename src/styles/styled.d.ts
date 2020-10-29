import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark'

    colors: {
      text: string
      background: string
      card: string
      border: string
    }
  }
}
