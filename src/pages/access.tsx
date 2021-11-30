import {
  Button,
  Flex,
  Heading,
  FormControl,
  Input,
  Textarea,
  Stack,
  Center,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
const Home: NextPage = (props: any) => {
  const [email, setEmail] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [reason, setReason] = React.useState('');
  function handleSubmit() {
    console.log(email, org, reason);
  }
  return (
    <>
      <Flex h="100vh" w={'100%'} alignItems="center" justifyContent="center">
        <Stack spacing={8} maxW="sm">
          <Flex a>
            <Heading as="h1" fontSize={props.isMobileView ? '1.3em' : '3em'}>
              Request <a className="Easy">access</a>
            </Heading>
          </Flex>

          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Organization"
                  value={org}
                  onChange={e => setOrg(e.target.value)}
                />
                <Textarea
                  type="paragraph_text"
                  placeholder="Why you chose SECR?"
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                />
              </Stack>
              <Center>
                {' '}
                <Button
                  type="submit"
                  mt={4}
                  bgGradient="linear(to-r, #ff0000, #ff9500)"
                  color="white">
                  Submit
                </Button>
              </Center>
            </FormControl>
          </form>
        </Stack>
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
