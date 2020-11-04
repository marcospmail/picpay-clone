import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import Routes from './routes'
import AppProvider from './hooks'

const StatusBarComp = () => {
  const theme = useTheme()
  return (
    <StatusBar
      barStyle={theme.colors.barStyle}
      backgroundColor={theme.colors.background}
      translucent
    />
  )
}

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <StatusBarComp />
        <Routes />
      </AppProvider>
    </>
  )
}

export default App
