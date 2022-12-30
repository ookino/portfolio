import { Stack, Box, Heading, Text, SimpleGrid, Flex, Divider } from '@chakra-ui/react';

import ProjectCard, { IProject } from '../../global/project-card';
import SectionContainer from '../../global/section-container';

const projects: IProject[] = [
  {
    stack: ['next js', 'chakra ui', 'zoho api', 'typescript'],
    title: 'Scrubs & Brushes',
    description:
      'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
    logo: '/images/projects/sb.webp',
    bg: 'green.600',
    status: 'live',
  },
  {
    stack: ['next js', 'trpc.io', 'mongo db', 'chakra ui', 'typescript'],
    title: 'Rentar',
    description:
      'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
    logo: '/images/projects/rentar.webp',
    bg: 'gray.50',
    status: 'under-construction',
  },
  {
    stack: ['next js', 'chakra ui', 'typescript'],
    title: 'Portfolio',
    description:
      'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
    logo: '/images/projects/okino.webp',
    bg: 'gray.600',
    bgGradient: 'linear(to-b,  #cf59e6, #6bc5f8,)',
    status: 'live',
  },
  {
    stack: ['nest js', 'next js', 'mongo db', 'typescript'],
    title: 'Mart',
    description:
      'Cleaning service website featuring a landing page detailing key information about the business and automatic price estimator and booking system. The user-friendly website allows potential customers to easily determine the cost of their cleaning service and schedule an inspection of the customers',
    logo: '/images/projects/mart.webp',
    bg: 'orange.600',
    status: 'down',
  },
];

const Projects = () => {
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

        <SimpleGrid spacing={{ base: 8, lg: 16 }} columns={{ base: 1, lg: 2 }}>
          {projects.map((item) => (
            <ProjectCard
              key={item.title}
              stack={item.stack}
              title={item.title}
              logo={item.logo}
              description={item.description}
              bg={item.bg}
              bgGradient={item.bgGradient}
              status={item.status}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
};

export default Projects;
