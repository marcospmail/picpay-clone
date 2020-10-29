import React from 'react'
import { ThemeProvider } from 'styled-components'

import { useTheme } from '../hooks/theme'

const StyledThemeProvider: React.FC = ({ children }) => {
  const { theme } = useTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider
