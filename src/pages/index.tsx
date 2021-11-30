import { Button, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Nav from '../components/Nav';
const Home: NextPage = (props: any) => {
  return (
    <>
      <Flex
        backgroundImage={props.isMobileView ? '' : '/bgimg/bg.png'}
        bgRepeat="no-repeat"
        bgPosition="right top"
        h="100vh"
        w={'100%'}>
        <Nav />
        <br />
        <Flex className="Landing-page">
          <div className="Showcase-container">
            <div className="Showcase-text">
              <Heading as="h1">
                Appsec made <a className="Easy">easy.</a>
              </Heading>
              <Heading as="h4" className="Showcase-description">
                SECR makes scanning for attack vectors in your software super
                simple!
              </Heading>
              <Button
                className="Request-access"
                type="submit"
                bgGradient="linear(to-r, #ff0000, #ff9500)">
                Access Coming Soon
              </Button>
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
