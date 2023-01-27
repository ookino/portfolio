import {
  Stack,
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';

import { IProject } from '@/interfaces';

const ProjectCard = ({ tools, title, logo, description, bg, bgGradient, links, colorScheme }: IProject) => {
  return (
    <Flex
      pb={{ base: 4, lg: 8 }}
      direction="column"
      borderRadius="2xl"
      border="1px"
      borderColor="gray.800"
      overflow="hidden"
      bg="#0a0a0a"
      gap={4}
      padding={{ base: '6', lg: '8' }}
      position="relative"
    >
      <Menu>
        <MenuButton
          top="3"
          right="3"
          position="absolute"
          as={IconButton}
          aria-label="Options"
          variant="outline"
          size="sm"
          borderColor="gray.800"
          borderRadius="lg"
          color="gray.700"
          icon={<BiLink />}
        />

        <MenuList
          fontFamily={`'Azeret Mono', monospace`}
          fontSize="xs"
          bg="gray.900"
          borderColor="gray.800"
          py={0}
          overflow="hidden"
        >
          {links?.map((item) => (
            <Link key={item.label} isExternal={item.link === '/' ? false : true} href={item.link}>
              <MenuItem
                py={3}
                textTransform="uppercase"
                bg="gray.900"
                fontWeight="medium"
                fontSize="xs"
                _hover={{
                  bg: 'gray.800',
                }}
              >
                <Flex align="center" gap="2">
                  <Icon as={item.icon} />
                  <Text>{item.label}</Text>
                </Flex>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>

      <Stack gap={{ base: 8, lg: 0 }}>
        <Flex justify="space-between" align={{ lg: 'center' }} direction={{ base: 'column', lg: 'row' }}>
          <Stack order={{ base: 2, lg: 1 }}>
            <Heading fontWeight="bold" size={{ base: 'sm', lg: 'md' }} color="gray.50">
              {title}
            </Heading>
            <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.300" lineHeight="1.8">
              {description}
            </Text>
          </Stack>
          <Flex order={{ base: 1, lg: 2 }}>
            <Image alt={title} src={logo} h={32} />
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={4} align="center">
            {tools.map((tool) => (
              <Icon key={Math.random()} color={tool.color} as={tool.tool} fontSize={{ base: 'md', md: 'lg' }} />
            ))}
          </Flex>

          <Flex>
            {colorScheme.map((item) => (
              <Icon
                transition="all 0.5s ease-out"
                ml={-1}
                key={item}
                as={BsCircleFill}
                color={item}
                fontSize="xl"
                _hover={{
                  mr: 1,
                }}
              />
            ))}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProjectCard;