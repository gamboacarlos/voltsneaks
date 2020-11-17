import { DataProvider } from "components/DataProvider"
import theme from "components/theme"
import { ThemeProvider } from "styled-components"
import { Global } from 'components/GlobalStyles'



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
