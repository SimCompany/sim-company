import { theme } from './../styles/theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Menu from '../components/Menu/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
