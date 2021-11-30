import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={extendTheme({
        useSystemColorMode: false,
        initialColorMode: 'dark',
      })}>
      <Head>
        <title>SECR</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="SECR makes scanning for attack vectors in your software super simple!"
        />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export default MyApp;
