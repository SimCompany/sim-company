import { theme } from './../styles/theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Menu /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  )
}

export default MyApp
