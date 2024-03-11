import { Stack, Box, Divider } from '@chakra-ui/react';

import About from './about';
import Contact from './contact';
import Hero from './hero';
import Projects from './projects';
import Certificates from './certificates';

export const HomePage = () => {
  return (
    <Box px={{ base: 0, md: 10, lg: 16, xl: 48 }}>
      <Stack>
        <Hero />
        <Projects />
        <Certificates />
        <About />
        <Divider borderColor="gray.800" />
        <Contact />
      </Stack>
    </Box>
  );
};
