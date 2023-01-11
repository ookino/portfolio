import { Stack, Box, Heading, Text, Flex, Icon, Tooltip } from '@chakra-ui/react';
import { useContext } from 'react';

import { Context } from '../../../context/global';
import SectionContainer from '../../global/section-container';

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
          <Heading bgClip="text" bgGradient="linear(to-br, gray.50, gray.400)">
            get in touch
          </Heading>
          <Text color="gray.500" fontWeight="medium">
            have an idea, lets make it happen
          </Text>
        </Box>
        <Flex gap={{ base: 8, lg: 16 }} align="center" direction={{ base: 'column', lg: 'row' }}>
          <Text flex={1} color="gray.300" fontSize={{ base: 'lg', lg: '2xl' }} lineHeight={1.9} textAlign="justify">
            Thank you 🙏 for going through my portfolio! If you have any questions, comments, or would like to get in
            touch for any reason, please feel free to reach out to me. I am always open to new opportunities and
            collaborations, so don&apos;t hesitate to get in touch. I look forward to hearing from you!
          </Text>

          <Stack flex={{ base: '1', lg: 0.5 }} gap={4} width={{ base: '100%', lg: 'unset' }}>
            <Flex
              width={{ base: '100%' }}
              borderRadius="xl"
              background="rgba(38, 38, 38, 0.5)"
              backdropFilter="auto"
              backdropBlur="30px"
              padding={8}
              border="1px"
              borderColor="gray.800"
              align="center"
              justify="center"
              gap={16}
            >
              {contacts.map((item) => (
                <Tooltip key={item.name} label={item.label} fontSize="sm" placement="top">
                  <a target="_blank" href={item.href} rel="noopener noreferrer">
                    <Heading display="flex" alignItems="center" justifyContent="center" size="3xl">
                      <Icon
                        cursor="pointer"
                        color={`${item.color}.300`}
                        as={item.icon}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                    </Heading>
                  </a>
                </Tooltip>
              ))}
            </Flex>
            <Flex
              borderRadius="xl"
              background="rgba(13, 13, 13, 0.5)"
              backdropFilter="auto"
              backdropBlur="30px"
              padding={4}
              border="1px"
              borderColor="gray.800"
              align="center"
              justify="center"
              gap={16}
            >
              {socials.map((item) => (
                <Tooltip key={item.name} placement="top" label={item.label}>
                  <a target="_blank" href={item.href} rel="noopener noreferrer">
                    <Text fontSize="2xl">
                      <Icon
                        cursor="pointer"
                        as={item.icon}
                        color={`${item.color}.300`}
                        _hover={{
                          color: `${item.color}.500`,
                        }}
                      />
                    </Text>
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
