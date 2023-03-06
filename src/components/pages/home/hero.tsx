import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';

import SectionContainer from '../../common/section-container';

const Hero = () => {
  const [large] = useMediaQuery('(min-width: 800px)');
  return (
    <SectionContainer>
      <Stack gap={{ base: 2, lg: 4 }}>
        <Heading width={{ lg: '90%' }}>
          crafting ideas into scalable digital{' '}
          <Box as="span" bgClip="text" bgGradient="linear(to-r, #cf59e6, #6bc5f8)">
            products{' '}
          </Box>
          <Box display={large ? 'none' : 'block'} as="br" />
          with intuitive user experiences
        </Heading>
        <Box pl={{ base: 1, lg: 2 }}>
          <Text width={{ lg: '60%' }} color="gray.300">
            Hi 👋, i&apos;m{' '}
            <Box as="span" fontWeight="bold">
              Yaseer Okino
            </Box>{' '}
            a full-stack engineer, passionate about creating aesthetically pleasing user interfaces, as well as
            developing reliable and scalable back-end systems.
          </Text>
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default Hero;
