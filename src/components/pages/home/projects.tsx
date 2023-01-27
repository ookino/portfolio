import { Stack, Box, Heading, Text, SimpleGrid, Flex, Divider } from '@chakra-ui/react';
import { useContext } from 'react';

import ProjectCard from '../../common/project-card';
import SectionContainer from '../../common/section-container';

import { Context } from '@/context/global';

const Projects = () => {
  const {
    data: { projects },
  } = useContext(Context);

  return (
    <SectionContainer>
      <Stack gap={{ base: 8, lg: 16 }}>
        <Box>
          <Heading size={{ base: 'lg', lg: 'xl' }} bgClip="text" bgGradient="linear(to-br, gray.50, gray.400)">
            projects
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" fontWeight="medium">
            from ideas into functional web sites & applications
          </Text>
        </Box>

        <SimpleGrid spacing={{ base: 8, lg: 8 }} columns={{ base: 1, lg: 1 }}>
          {projects.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
};

export default Projects;
