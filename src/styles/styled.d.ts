import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'light' | 'dark'

    colors: {
      barStyle: 'default' | 'light-content' | 'dark-content'
      text: string
      background: string
      card: string
      border: string
      icon: string
    }
  }
}
