import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Nav from '../components/Nav';
import Device from '../device';
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
        <meta name="image" content={"../../public/preview/preview.png"} />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </Head>
      <Device>
        {({ isMobile }) => {
          return <Nav isMobile={isMobile} />;
        }}
      </Device>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
