import { Button, Center, Flex, Heading, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
const Home: NextPage = (props: any) => {
  return (
    <>
      <Flex
        backgroundImage={props.isMobileView ? '' : '/bgimg/bg.png'}
        bgRepeat="no-repeat"
        bgPosition="right top"
        h="100vh"
        w={'100%'}>
        <br />
        <Flex className="Landing-page">
          <div className="Showcase-container">
            <div className="Showcase-text">
              <Heading as="h1" fontSize={props.isMobileView ? '1.5em' : '3em'}>
                Appsec made <a className="Easy">easy.</a>
              </Heading>
              <br />
              {props.isMobileView ? (
                ''
              ) : (
                <Heading as="h4" className="Showcase-description">
                  SECR makes scanning for attack vectors in your software super
                  simple!
                </Heading>
              )}
              <Link
                href="/access"
                _hover={{ textDecoration: 'none', bg: 'transparent' }}>
                <Button
                  className="Request-access"
                  bgGradient="linear(to-r, #ff0000, #ff9500)">
                  Request Access
                </Button>
              </Link>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

Home.getInitialProps = (ctx: any) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  return {
    isMobileView: !!isMobileView,
  };
};

export default Home;
