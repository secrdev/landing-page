import {
  Container,
  Box,
  Stack,
  IconButton,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import ThemeSwitcher from './themeSwitcher';
import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Nav(props) {
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} {...props}>
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
          <Image
            src={useColorModeValue(
              '/Secr-with-text-black.svg',
              'Secr-with-text-white.svg'
            )}
            alt="logo"
          />
        </Flex>

        {/*  Socials In Right Corner */}
        <Stack
          isInline
          align="center"
          justify="center"
          spacing={4}
          ml="auto"
          mr="auto">
          <ThemeSwitcher />
          <IconButton icon={<FaDribbble />} />
          <IconButton icon={<FaTwitter />} />
          <IconButton icon={<FaYoutube />} />
          <IconButton icon={<FaInstagram />} />
        </Stack>
      </Container>
    </Box>
  );
}
