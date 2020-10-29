import React, { useCallback } from 'react'
import { useTheme } from 'styled-components'
import { Switch } from 'react-native'
import { useTheme as useThemeContext } from '../../hooks/theme'

import { Container } from './styles'

const Settings: React.FC = () => {
  const theme = useTheme()
  const { toggle } = useThemeContext()

  const handleToggleTheme = useCallback(() => {
    toggle()
  }, [toggle])

  return (
    <Container>
      <Switch
        onValueChange={handleToggleTheme}
        value={theme.title === 'dark'}
      />
    </Container>
  )
}

export default Settings
