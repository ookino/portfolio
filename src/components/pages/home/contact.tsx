import { Stack, Box, Heading, Text, Flex, SimpleGrid, Icon, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';

import SectionContainer from '../../global/section-container';

export const socialLinks = [
  {
    icon: SiGithub,
    path: 'https://github.com/',
    name: 'Github',
    color: 'gray',
  },
  {
    icon: SiLinkedin,
    path: 'https://linkedin.com/in/yaseerokino/',
    name: 'Linkedin',
    color: 'linkedin',
  },
  {
    icon: SiInstagram,
    path: 'https://www.behance.net/yaseerokino',
    name: 'Instagram',
    color: 'pink',
  },
];

export const contactLinks = [
  {
    tooltip: 'Send an Email',
    name: 'email',
    path: 'mailto:hello@yaseerokino.com',
    logo: IoMail,
    color: 'cyan',
  },

  {
    tooltip: 'Send a Whatsapp message',
    name: 'whatsapp',
    path: 'https://wa.me/message/SOQ7CQXDDHMVP1',
    logo: IoLogoWhatsapp,
    color: 'green',
  },
];

const Contact = () => {
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
              {contactLinks.map((item) => (
                <Tooltip key={item.name} label={item.tooltip} fontSize="sm" placement="top">
                  <a target="_blank" href={item.path} rel="noopener noreferrer">
                    <Heading display="flex" alignItems="center" justifyContent="center" size="3xl">
                      <Icon
                        cursor="pointer"
                        color={`${item.color}.300`}
                        as={item.logo}
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
              {socialLinks.map((item) => (
                <Tooltip key={item.name} placement="top" label={item.name}>
                  <a target="_blank" href={item.path} rel="noopener noreferrer">
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
