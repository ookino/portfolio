import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ISectionContainer {
  children: ReactNode;
}

const SectionContainer = ({ children }: ISectionContainer) => {
  return (
    <Box as="section" py={{ base: 20, md: 32, lg: 40 }}>
      {children}
    </Box>
  );
};

export default SectionContainer;
