import {
  Stack,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tooltip,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useContext } from 'react';

import SectionContainer from '../../common/section-container';

import { Context } from '@/context/global';

const About = () => {
  const {
    data: { aboutEmojis, education, experience, stack },
  } = useContext(Context);
  return (
    <SectionContainer>
      <Stack gap={{ base: 8, lg: 16 }}>
        <Box>
          <Heading size={{ base: 'lg', lg: 'xl' }} bgClip="text" bgGradient="linear(to-br, gray.50, gray.400)">
            about
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.500" fontWeight="medium">
            my background, experience and skills
          </Text>
        </Box>

        <Stack gap={{ base: 8, lg: 12 }}>
          <Flex borderRadius="xl" flex="1">
            <Text color="gray.300" fontSize={{ base: 'md', lg: 'xl' }} lineHeight={2}>
              I am Software Engineer with a focus on developing user-friendly interfaces and experiences. With over 3+
              years of experience as a full stack developer and strong background in JavaScript, as well as proficiency
              in Ruby and Python, I am able to bring a diverse set of skills to any project. I have a keen focus on
              developing creative and effective solutions that solve problems, while maintaining attention to design,
              accessibility, and well-structured code. I enjoy bringing ideas to reality and developing solutions that
              provide excellent user experiences.
            </Text>
          </Flex>

          <SimpleGrid spacing={{ base: 8, lg: 12 }}>
            <Flex borderRadius="xl" borderColor="gray.800">
              <Tabs variant="solid-rounded" colorScheme="gray" width="100%" isFitted>
                <TabList bg="#0a0a0a" padding={3} borderRadius="2xl">
                  <Tab borderRadius="lg" fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                    STACK
                  </Tab>
                  <Tab borderRadius="xl" py={3} fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                    EDUCATION
                  </Tab>
                  <Tab borderRadius="lg" fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>
                    EXPERIENCE
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex px={8} py={12} borderColor="gray.800" direction="column" gap={16}>
                      <SimpleGrid columns={{ base: 4, lg: 5 }} width="100%" spacing="12" height="100%">
                        {stack.map((item) => (
                          <Tooltip key={item.color} label={item.label} placement="top">
                            <Box display="flex" alignItems="center" justifyContent="center">
                              <Icon color={item.color} as={item.icon} fontSize={{ base: '3xl', lg: '5xl' }} />
                            </Box>
                          </Tooltip>
                        ))}
                      </SimpleGrid>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Accordion as={Stack} gap={4} py={4}>
                      {education.map((item) => (
                        <AccordionItem
                          key={item.university}
                          color="gray.800"
                          border="1px"
                          borderRadius="xl"
                          padding={2}
                        >
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                <Text fontWeight="semibold" color="gray.300">
                                  {item.qualification}
                                </Text>
                                <Text fontSize="sm" color="gray.500">
                                  {item.university}&nbsp;&nbsp;|&nbsp;&nbsp;
                                  <Box as="span" fontWeight="medium">
                                    {item.date}
                                  </Box>
                                </Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <Text color="gray.400" lineHeight={1.8}>
                              {item.description}
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPanel>
                  <TabPanel>
                    <Accordion as={Stack} gap={4} py={4}>
                      {experience.map((item) => (
                        <AccordionItem key={item.company} border="1px" color="gray.800" borderRadius="xl" padding={2}>
                          <h2>
                            <AccordionButton>
                              <Box as="span" flex="1" textAlign="left">
                                <Text fontWeight="semibold" color="gray.300">
                                  {item.role}
                                </Text>
                                <Text fontSize="sm" color="gray.500">
                                  {item.company}&nbsp;&nbsp;|&nbsp;&nbsp;
                                  <Box as="span" fontWeight="medium">
                                    {item.date}
                                  </Box>
                                </Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            <UnorderedList color="gray.400" spacing={3}>
                              {item.description.map((item) => (
                                <ListItem key={item}>{item}</ListItem>
                              ))}
                            </UnorderedList>
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </SimpleGrid>
        </Stack>
      </Stack>
    </SectionContainer>
  );
};

export default About;
