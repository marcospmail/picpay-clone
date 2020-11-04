import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect
} from 'react'
import { DefaultTheme } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ThemeContextData {
  theme: DefaultTheme
  toggle(): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light)

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('@PicPayClone:theme')

      if (!storedTheme) {
        setTheme(light)
        return
      }

      setTheme(JSON.parse(storedTheme))
    }

    fetchTheme()
  }, [])

  const toggle = useCallback(async () => {
    const newTheme = theme.title === 'light' ? dark : light

    setTheme(newTheme)

    await AsyncStorage.setItem('@PicPayClone:theme', JSON.stringify(newTheme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggle, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  return useContext(ThemeContext)
}

export { ThemeProvider, useTheme }
