import { Flex, Heading, Box, Text, Button, Stack, useDisclosure, Tooltip, Icon } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { socialLinks, contactLinks } from '../../pages/home/contact';
import AudioPlayer from '../audio-player';

import Toggle from './toggle';

const Navigation = () => {
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
            <Image alt="Okino boomerang logo" src="/svg/okino-logo.svg" width="43" height="47" />
          </Link>
          <Toggle isToggled={isOpen} handleToggle={onToggle} />
        </Flex>
      </Flex>
      <Menu isOpen={isOpen} />
    </>
  );
};

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Slide direction="left" in={isOpen} style={{ zIndex: 3 }}>
      <Box py={44} px={{ base: 8, md: 10, lg: 16, xl: 52 }} height="100vh" color="white" bg="#0a0a0a" borderRight="5px">
        <Flex justify="space-between" direction={{ base: 'column', lg: 'row' }} gap={16}>
          <Stack gap={4} align="start" order={{ base: 3, lg: 1 }}>
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
            >
              Explore
            </Text>
            <Flex align="center" justify="center" gap={{ base: 8, lg: 16 }}>
              {socialLinks.map((item) => (
                <Tooltip key={item.name} label={`Visit ${item.name}`}>
                  <Link href={item.path} passHref>
                    <Text fontSize="5xl">
                      <Icon
                        cursor="pointer"
                        as={item.icon}
                        color={`${item.color}.300`}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                    </Text>
                  </Link>
                </Tooltip>
              ))}
            </Flex>
          </Stack>

          <Stack gap={4} align="start" order={2}>
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
            >
              Contact
            </Text>
            <Flex align="center" justify="center" gap={{ base: 8, lg: 16 }}>
              {contactLinks.map((item) => (
                <Tooltip key={item.name} label={`Visit ${item.name}`}>
                  <Link href={item.path} passHref>
                    <Text fontSize="6xl">
                      <Icon
                        cursor="pointer"
                        as={item.logo}
                        color={`${item.color}.300`}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                    </Text>
                  </Link>
                </Tooltip>
              ))}
            </Flex>
          </Stack>

          <Stack gap={4} align="start" order={{ base: 1, lg: 3 }}>
            <Text
              color="gray.500"
              fontWeight="semibold"
              fontFamily={`'Azeret Mono', monospace`}
              textTransform="uppercase"
            >
              Check out
            </Text>
            <Flex align="center" justify="center" gap={{ base: 8, lg: 16 }}>
              <Button py={6} size="lg" bgGradient="linear(to-r, #cf59e6, #6bc5f8)" color="gray.900">
                My Resume
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Slide>
  );
};

export default Navigation;
