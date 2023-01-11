import { Stack, Box, Heading, Text, SimpleGrid, Flex, Divider, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';

import { IProject } from '../../interfaces';

const ProjectCard = ({ stack, title, logo, description, bg, bgGradient, status }: IProject) => {
  return (
    <Flex
      pb={{ base: 4, lg: 8 }}
      direction="column"
      borderRadius="2xl"
      border="1px"
      borderColor="gray.800"
      overflow="hidden"
      bgGradient="linear(to-br, rgba(38, 38, 38, 0.7), rgba(17, 17, 17, 0.5),)"
      gap={8}
    >
      <Flex
        position="relative"
        bg={bg && bg}
        bgGradient={bgGradient && bgGradient}
        height="xs"
        align="center"
        justify="center"
        color="white"
        width="full"
      >
        <Tooltip label={'Project is ' + status} size="sm">
          <Box position="absolute" top={6} right={6}>
            <Flex width="9" height="9" borderRadius="50%" bg="gray.800" align="center" justify="center">
              <Text
                fontWeight={{ base: 'medium', lg: 'bold' }}
                fontSize={{ base: 'xx-small', lg: 'xs' }}
                fontFamily={`'Azeret Mono', monospace`}
                textTransform="uppercase"
              >
                {status === 'under-construction' ? '🚧' : status === 'down' ? '🚫' : '🟢'}
              </Text>
            </Flex>
          </Box>
        </Tooltip>
        <Flex
          p={{ base: 2, lg: 4 }}
          borderRadius="lg"
          bg="gray.800"
          position="absolute"
          bottom={{ base: 2, lg: 4 }}
          right={{ lg: 4 }}
        >
          <Text
            fontWeight={{ base: 'medium', lg: 'bold' }}
            fontSize={{ base: 'xx-small', lg: 'xs' }}
            fontFamily={`'Azeret Mono', monospace`}
            textTransform="uppercase"
          >
            {stack.map((item) => `${item}, `)}
          </Text>
        </Flex>

        <Image alt={title} src={logo} width="120" height="60" />
      </Flex>

      <Stack px={6} gap={{ lg: 2 }}>
        <Flex justify="space-between" align="center">
          <Heading fontWeight="bold" size={{ base: 'sm', lg: 'md' }} color="gray.200">
            {title}
          </Heading>
        </Flex>

        <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.300" lineHeight="1.8">
          {description}
        </Text>
      </Stack>
    </Flex>
  );
};

export default ProjectCard;
