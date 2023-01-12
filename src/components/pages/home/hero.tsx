import { Stack, Box, Heading, Text } from '@chakra-ui/react';

import SectionContainer from '../../global/section-container';

const Hero = () => {
  return (
    <SectionContainer>
      <Stack gap={8}>
        <Heading size={{ base: '3xl', xl: '4xl' }} width={{ lg: '90%' }}>
          crafting ideas into scalable digital{' '}
          <Box as="span" bgClip="text" bgGradient="linear(to-r, #cf59e6, #6bc5f8)">
            products{' '}
          </Box>
          with intuitive user experiences
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} width={{ lg: '70%' }} color="gray.400" lineHeight={1.6}>
          Hi, 👋 my name is{' '}
          <Box as="span" fontWeight="bold">
            Yaseer Okino
          </Box>{' '}
          and I&apos;m a full-stack engineer, passionate about creating aesthetically pleasing user interfaces, as well
          as developing reliable and scalable back-end systems.
        </Text>
      </Stack>
    </SectionContainer>
  );
};

export default Hero;
