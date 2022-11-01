import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/globalStyle'
import { defaultTheme } from '../../styles/themes/default'
import { LayoutComponent } from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', defaultTheme)

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'default' ? defaultTheme : 'dark')
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
