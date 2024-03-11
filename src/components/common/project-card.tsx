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
  Button,
  Link,
} from '@chakra-ui/react';
import { BiLink } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';

import { IProject } from '@/interfaces';

const ProjectCard = ({ title, description, bg, bgGradient, links }: IProject) => {
  return (
    <Flex
      pb={{ base: 4, lg: 8 }}
      direction="column"
      borderRadius="2xl"
      border="1px"
      borderColor="gray.800"
      overflow="hidden"
      bg="#0c0c0c"
      gap={4}
      padding={{ base: '6', lg: '8' }}
      justify="space-between"
    >
      <Flex justify="space-between">
        <Stack gap="8">
          <Flex justify="space-between" direction="column">
            <Stack>
              <Text fontWeight="bold" size="3xl" color="gray.50">
                {title}
              </Text>
              <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.300" lineHeight="1.8">
                {description}
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
      <Menu>
        <MenuButton as={Button} aria-label="Options" variant="solid" size="sm" borderColor="gray.800" borderRadius="lg">
          View more
        </MenuButton>

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
    </Flex>
  );
};

export default ProjectCard;
