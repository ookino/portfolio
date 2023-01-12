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

import { Context } from '../../../context/global';
import SectionContainer from '../../global/section-container';

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

        <SimpleGrid spacing={{ base: 8, lg: 16 }} columns={{ lg: 2 }}>
          <Flex
            borderRadius="xl"
            flex="1"
            padding={{ md: 6 }}
            bgGradient={{ md: 'linear(to-br, rgba(17, 17, 17, 0.5), rgba(38, 38, 38, 0.5),)' }}
          >
            <Text color="gray.300" fontSize={{ base: 'md', lg: 'xl' }} lineHeight={1.9} textAlign="justify">
              I am a passionate Software Engineer with a focus on developing user-friendly interfaces and experiences.
              With over 3+ years of experience as a full stack developer and strong background in JavaScript, as well as
              proficiency in Ruby and Python, I am able to bring a diverse set of skills to any project. I have a keen
              focus on developing creative and effective solutions that solve problems, while maintaining attention to
              design, accessibility, and well-structured code. I enjoy bringing ideas to reality and developing
              solutions that provide excellent user experiences.
            </Text>
          </Flex>
          <Flex
            width="full"
            flex="1"
            borderRadius="xl"
            background="rgba(38, 38, 38, 0.5)"
            backdropFilter="auto"
            backdropBlur="30px"
            padding={8}
            border="1px"
            borderColor="gray.800"
            direction="column"
          >
            <SimpleGrid columns={3} spacing={8} width="100%" height="100%">
              {aboutEmojis.map((item) => (
                <Heading
                  key={item}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  size={{ base: '2xl', lg: '4xl' }}
                >
                  {item}
                </Heading>
              ))}
            </SimpleGrid>
          </Flex>
          <Flex
            width="full"
            flex="1"
            borderRadius="xl"
            background="rgba(38, 38, 38, 0.5)"
            backdropFilter="auto"
            backdropBlur="30px"
            padding={8}
            border="1px"
            borderColor="gray.800"
            direction="column"
            gap={16}
          >
            <Text fontSize={{ base: 'sm', lg: 'md' }} fontWeight="bold" textTransform="uppercase" textAlign="center">
              My Stack
            </Text>
            <SimpleGrid columns={3} spacing={16} width="100%" height="100%">
              {stack.map((item) => (
                <Tooltip key={item.color} label={item.label} placement="top">
                  <Heading display="flex" alignItems="center" justifyContent="center" size={{ base: '2xl', lg: '3xl' }}>
                    <Icon color={item.color} as={item.icon} />
                  </Heading>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Flex>

          <Flex>
            <Tabs variant="solid-rounded" colorScheme="gray" width="100%" isFitted>
              <TabList bg="rgba(38, 38, 38, 0.5)" padding={3} borderRadius="2xl">
                <Tab borderRadius="xl" py={3}>
                  EDUCATION
                </Tab>
                <Tab borderRadius="lg">EXPERIENCE</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Accordion as={Stack} gap={4} py={4}>
                    {education.map((item) => (
                      <AccordionItem key={item.university} border="1px" color="gray.500" borderRadius="xl" padding={2}>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <Text fontWeight="semibold" color="gray.300">
                                {item.qualification}
                              </Text>
                              <Text fontSize="sm">
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
                      <AccordionItem key={item.company} border="1px" color="gray.500" borderRadius="xl" padding={2}>
                        <h2>
                          <AccordionButton>
                            <Box as="span" flex="1" textAlign="left">
                              <Text fontWeight="semibold" color="gray.300">
                                {item.role}
                              </Text>
                              <Text fontSize="sm">
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
    </SectionContainer>
  );
};

export default About;
