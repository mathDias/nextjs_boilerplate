import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'pink',
        value: theme.colors.pink
      },
      {
        name: 'purple',
        value: theme.colors.purple
      },
      {
        name: 'dark',
        value: '#2a2b2e'
      },
      {
        name: 'light',
        value: '#f8f8f8'
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
