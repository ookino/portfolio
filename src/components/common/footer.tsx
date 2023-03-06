import { Flex, Icon, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <Flex
      zIndex={2}
      as="footer"
      width="100%"
      p={{ base: 6, md: 8, lg: 12 }}
      borderTop="1px"
      borderTopColor="gray.800"
      position="absolute"
      bg="#0f0f0f"
      align="center"
      justify="space-between"
    >
      <Box display={{ base: 'none', lg: 'block' }}>
        <Link href="/">
          <Image alt="Okino boomerang logo" src="/images/svg/okino-logo-gradient.svg" width="43" height="47" />
        </Link>
      </Box>

      <Text
        textTransform="uppercase"
        color="gray.500"
        fontSize="xs"
        fontWeight="semibold"
        fontFamily={`'Azeret Mono', monospace`}
      >
        Design & Development
      </Text>

      <Link href="https://github.com/yaseerokino">
        <Text fontSize="xl">
          <Icon
            as={FaGithubAlt}
            color="gray.300"
            _hover={{
              color: 'gray.500',
            }}
          />
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
