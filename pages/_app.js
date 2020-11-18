import { DataProvider } from "contexts/DataProvider"
import theme from "styles/theme"
import { ThemeProvider } from "styled-components"
import { Global } from 'styles/GlobalStyles'



function MyApp({ Component, pageProps }) {
  return (

    <DataProvider>
      <ThemeProvider theme={theme}>
        <Global/>
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  )
}

export default MyApp
