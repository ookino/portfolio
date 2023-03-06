import { Stack, Box, Heading, Text, Flex, Icon, Tooltip, Link } from '@chakra-ui/react';
import { useContext } from 'react';

import SectionContainer from '../../common/section-container';

import { Context } from '@/context/global';

const Contact = () => {
  const {
    data: {
      links: { contacts, socials },
    },
  } = useContext(Context);

  return (
    <SectionContainer>
      <Stack gap={16}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" bgClip="text" bgGradient="linear(to-br, gray.50, gray.400)">
            get in touch
          </Text>
          <Text color="gray.500" fontWeight="medium">
            have an idea, lets make it happen
          </Text>
        </Box>

        <Flex gap={{ base: 8, lg: 16 }} direction={{ base: 'column', lg: 'row' }}>
          <Text flex={1} color="gray.300" lineHeight={2}>
            Thank you 🙏 for going through my portfolio! If you have any questions, comments, or would like to get in
            touch for any reason, please feel free to reach out to me. I am always open to new opportunities and
            collaborations, so don&apos;t hesitate to get in touch. I look forward to hearing from you!
          </Text>

          <Stack flex={{ base: '1', lg: 0.5 }} gap={1} width={{ base: '100%', lg: 'unset' }}>
            <Stack width={{ base: '100%' }} justify="center" gap={1}>
              {contacts.map((item) => (
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
                    borderRadius="xl"
                    border="1px"
                    borderColor="gray.800"
                    background="rgba(10, 10, 10, 1)"
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
            </Stack>
            <Flex
              borderRadius="xl"
              background="rgba(10, 10, 10, 1)"
              backdropFilter="auto"
              backdropBlur="30px"
              p={4}
              border="1px"
              borderColor="gray.800"
              align="center"
              justify="center"
              gap={16}
            >
              {socials.map((item) => (
                <Tooltip key={item.name} placement="top" label={item.label}>
                  <a target="_blank" href={item.href} rel="noopener noreferrer">
                    <Icon
                      cursor="pointer"
                      as={item.icon}
                      color={`${item.color}.300`}
                      _hover={{
                        color: `${item.color}.500`,
                      }}
                    />
                  </a>
                </Tooltip>
              ))}
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </SectionContainer>
  );
};

export default Contact;
