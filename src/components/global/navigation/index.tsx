import { Flex, Heading, Box, Text, Button, Stack, useDisclosure, Tooltip, Icon, Link } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { HiDocumentText } from 'react-icons/hi';

import { Context } from '../../../context/global';
import { ILink, ILinks } from '../../../interfaces';

import Toggle from './menu-toggle';

const Navigation = () => {
  const {
    data: { links },
  } = useContext(Context);

  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex as="nav" width="100%" position="fixed" py={6} px={{ base: 5, md: 8, lg: 16, xl: 48 }} zIndex={4}>
        <Flex
          px={8}
          py={6}
          backdropFilter="auto"
          background="rgba(38, 38, 38, 0.5)"
          borderRadius="3xl"
          border="1px"
          borderColor="gray.800"
          backdropBlur="30px"
          width="full"
          justify="space-between"
          align="center"
        >
          <Link href="/">
            <Image alt="Okino boomerang logo" src="/images/svg/okino-logo.svg" width="43" height="47" />
          </Link>
          <Toggle isToggled={isOpen} handleToggle={onToggle} />
        </Flex>
      </Flex>
      <Menu isOpen={isOpen} links={links} />
    </>
  );
};

const Menu = ({ isOpen, links }: { isOpen: boolean; links: ILinks }) => {
  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 3, transition: 'all 0.5s ease-out' }}>
      <Box
        py={44}
        px={{ base: 8, md: 10, lg: 16, xl: 52 }}
        height="100vh"
        color="white"
        bg="#0a0a0a"
        borderRight="5px"
        borderColor="red"
        overflow="visible"
      >
        <Flex justify="space-between" direction={{ base: 'column', lg: 'row' }} gap={16}>
          <Stack gap={3} align="start" order={{ base: 3, lg: 1 }} flex="1">
            <Text
              color="gray.500"
              fontWeight="bold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
              fontSize={{ base: 'xs', lg: 'sm' }}
            >
              Explore
            </Text>
            <Flex direction="column" justify="center" gap={{ base: 2, lg: 4 }} width="100%">
              {links.socials.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  _hover={{
                    textDecoration: 'none',
                  }}
                  isExternal
                >
                  <Flex
                    width="100%"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor="gray.800"
                    bg="gray.900"
                    _hover={{ bg: 'gray.800' }}
                  >
                    <Flex padding={0} margin={0} align="center" gap={2}>
                      <Icon
                        cursor="pointer"
                        as={item.icon}
                        color={`${item.color}.300`}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                      <Text
                        margin={0}
                        padding={0}
                        lineHeight="20px"
                        color="gray.400"
                        textTransform="uppercase"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Stack>

          <Stack gap={3} align="start" order={2} flex="1">
            <Text
              color="gray.500"
              fontWeight="bold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
              fontSize={{ base: 'xs', lg: 'sm' }}
            >
              Contact
            </Text>
            <Flex direction="column" gap={{ base: 2, lg: 4 }} width="100%">
              {links.contacts.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <Flex
                    width="100%"
                    p={4}
                    borderRadius="lg"
                    border="1px"
                    borderColor="gray.800"
                    bg="gray.900"
                    _hover={{ bg: 'gray.800' }}
                  >
                    <Flex padding={0} margin={0} align="center" gap={2}>
                      <Icon
                        cursor="pointer"
                        as={item.icon}
                        color={`${item.color}.300`}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                      <Text
                        margin={0}
                        padding={0}
                        lineHeight="20px"
                        color="gray.400"
                        textTransform="uppercase"
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        {item.label}
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Stack>

          <Stack gap={3} align="start" order={{ base: 1, lg: 3 }} flex="1">
            <Text
              color="gray.500"
              fontWeight="bold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
              fontSize={{ base: 'xs', lg: 'sm' }}
            >
              Check out
            </Text>
            <Flex width="100%" direction="column" justify="center">
              <Link
                href="https://okino-public.s3.eu-west-2.amazonaws.com/resume.pdf"
                _hover={{
                  textDecoration: 'none',
                }}
                isExternal
              >
                <Flex
                  width="100%"
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.800"
                  bg="gray.900"
                  _hover={{ bg: 'gray.800' }}
                >
                  <Flex padding={0} margin={0} align="center" width="100%" gap={2}>
                    <Icon cursor="pointer" as={HiDocumentText} color="gray.300" />
                    <Text
                      margin={0}
                      padding={0}
                      lineHeight="20px"
                      color="gray.400"
                      textTransform="uppercase"
                      fontSize="xs"
                      fontWeight="bold"
                    >
                      My Resume
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Slide>
  );
};

export default Navigation;
