import type { AppProps } from 'next/app'

import { GlobalStyle } from '../../styles/globalStyle'
// import { darkTheme } from '../../styles/themes/dark'
import { defaultTheme } from '../../styles/themes/default'
import { LayoutComponent } from '../components/Layout'
// import usePersistedState from '../utils/hooks/usePersistedState'

import { DefaultTheme, ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', defaultTheme)

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'default' ? defaultTheme : darkTheme)
  // }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>    
    </>
  )
}
