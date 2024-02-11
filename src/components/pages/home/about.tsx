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
      <Stack gap={{ base: 8, lg: 12 }}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" bgClip="text" bgGradient="linear(to-br, gray.50, gray.400)">
            about
          </Text>
          <Text color="gray.500" fontWeight="medium">
            my background, experience and skills
          </Text>
        </Box>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 8, lg: 12 }}>
          <Flex borderRadius="xl" flex="1">
            <Text color="gray.300" lineHeight={2}>
              A Marketing and branding professional with in-depth knowledge in product management seeking to leverage
              exemplary critical thinking skills, commercial and technological awareness, prioritization, and creativity
              to deliver results in growth, revenue, operational performance, and profitability at a reputable
              organization. Frequently commended for critical thinking and innovativeness.
            </Text>
          </Flex>

          <SimpleGrid spacing={{ base: 8, lg: 12 }} flex={1}>
            <Flex borderRadius="xl" borderColor="gray.800">
              <Tabs variant="solid-rounded" colorScheme="gray" width="100%" isFitted>
                <TabList bg="#0a0a0a" padding={3} borderRadius="2xl">
                  <Tab borderRadius="lg" fontSize={{ base: 'xs', md: 'sm' }}>
                    STACK
                  </Tab>
                  <Tab borderRadius="xl" py={3} fontSize={{ base: 'xs', md: 'sm' }}>
                    EDUCATION
                  </Tab>
                  <Tab borderRadius="lg" fontSize={{ base: 'xs', md: 'sm' }}>
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
        </Flex>
      </Stack>
    </SectionContainer>
  );
};

export default About;
