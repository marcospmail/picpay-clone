import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider, withTheme } from 'styled-components'

import Home from '../pages/Home'

import light from '../styles/themes/light'

describe('I dont know what Im doing', () => {
  it('should do something', () => {
    const Comp = (
      <ThemeProvider theme={light}>
        <Home />
      </ThemeProvider>
    )

    const { debug } = render(Comp)

    debug()
  })
})
