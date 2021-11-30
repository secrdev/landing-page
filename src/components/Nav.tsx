import {
  Container,
  Box,
  Stack,
  IconButton,
  Flex,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import ThemeSwitcher from './themeSwitcher';
import { FaGithubAlt, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Nav({ isMobile }: { isMobile: boolean }) {
  const imgsrc = useColorModeValue(
    '/Secr-with-text-black.svg',
    'Secr-with-text-white.svg'
  );
  if (isMobile)
    return (
      <Box position="fixed" as="nav" w="100%" zIndex={1}>
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="center"
          style={{
            left: '50%',
          }}>
          <Flex alignItems="center" justifyContent="center" mr={5}>
            <Image src={imgsrc} alt="logo" />
          </Flex>
        </Container>
      </Box>
    );

  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="center"
        style={{
          left: '50%',
        }}>
        <Flex alignItems="center" justifyContent="center" mr={5}>
          <Link href="/">
            {' '}
            <Image src={imgsrc} alt="logo" />
          </Link>
        </Flex>
        <Stack
          isInline
          align="center"
          justify="center"
          spacing={4}
          ml="auto"
          mr="auto">
          <ThemeSwitcher />
          <Link href="//github.com/secrdev">
            {/* @ts-ignore */}
            <IconButton icon={<FaGithubAlt />} />
          </Link>
          <Link href="//twitter.com/secrdev">
            {/* @ts-ignore */}
            <IconButton icon={<FaTwitter />} />
          </Link>
          <Link href="//instagram.com/secrdev">
            {/* @ts-ignore */}
            <IconButton icon={<FaInstagram />} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
