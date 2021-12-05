import {
  Button,
  Flex,
  Heading,
  FormControl,
  Input,
  Textarea,
  Stack,
  Center,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import emailjs from 'emailjs-com';
function Home(props: any) {
  const toast = useToast();
  const [email, setEmail] = React.useState('');
  const [org, setOrg] = React.useState('');
  const [reason, setReason] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    // Reset the form after submission
    if (email.trim() !== '' && org.trim() !== '' && reason.trim() !== '') {
      Promise.all([
        emailjs.sendForm(
          'secremail',
          'secrprivatealpha',
          event.target,
          'user_a5cBJN9rOhduka18DDhfg'
        ),
        setOrg(''),
        setEmail(''),
        setReason(''),
        toast({
          title: 'Success!',
          description: 'Your request has been sent!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        }),
      ]);
      event.target.reset();
    }
    event.target.reset();
  }
  return (
    <div className="Access">
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
                  name="email"
                />
                <Input
                  type="text"
                  placeholder="Organization"
                  value={org}
                  onChange={e => setOrg(e.target.value)}
                  name="org"
                />
                <Textarea
                  type="paragraph_text"
                  placeholder="Why you chose SECR"
                  value={reason}
                  onChange={e => setReason(e.target.value)}
                  name="reason"
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
    </div>
  );
}

Home.getInitialProps = (ctx: any) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  return {
    isMobileView: !!isMobileView,
  };
};

export default Home;
