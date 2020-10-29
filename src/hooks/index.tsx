import React from 'react'
import StyledThemeProvider from '../providers/StyledThemeProvider'

import { ThemeProvider as ThemeContextProvider } from './theme'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StyledThemeProvider>{children}</StyledThemeProvider>
    </ThemeContextProvider>
  )
}

export default AppProvider
