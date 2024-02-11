import { Stack, Box, Heading, Text, useMediaQuery } from '@chakra-ui/react';

import SectionContainer from '../../common/section-container';

const Hero = () => {
  const [large] = useMediaQuery('(min-width: 800px)');
  return (
    <SectionContainer>
      <Stack gap={{ base: 2, lg: 4 }}>
        <Heading width={{ lg: '90%' }}>Driving success with strategic innovation</Heading>
        <Box pl={{ base: 1, lg: 2 }} lineHeight={2}>
          <Text width={{ lg: '60%' }} color="gray.300">
            Hi 👋, i&apos;m{' '}
            <Box as="span" fontWeight="bold">
              Demi Olaleye
            </Box>{' '}
            An innovative marketer and branding expert fueled by a passion for product enhancement, equipped with a
            robust blend of strategic thinking and cutting-edge industry insights.
          </Text>
        </Box>
      </Stack>
    </SectionContainer>
  );
};

export default Hero;
