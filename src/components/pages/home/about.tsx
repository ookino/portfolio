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
} from '@chakra-ui/react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiRuby,
  SiRubyonrails,
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

import SectionContainer from '../../global/section-container';

const aboutEmojis = ['💡', '💻', '🎨', '📚', '🤓', '🔍'];
const myStack = [
  { icon: SiJavascript, color: '#E3D04C', label: 'Javascript' },
  { icon: SiPython, color: '#356FA1', label: 'Python' },
  { icon: SiRuby, color: '#cc342d', label: 'Ruby' },
  { icon: SiTypescript, color: '#2e72bb', label: 'Typescript' },
  { icon: SiNodedotjs, color: '#61995e', label: 'Node Js' },
  { icon: SiRubyonrails, color: '#D30002', label: 'Ruby on Rails' },
  { icon: SiReact, color: '#01d1f2', label: 'React' },
  { icon: SiNestjs, color: '#de2641', label: 'Nest Js' },
  { icon: SiNextdotjs, color: 'gray.50', label: 'Next Js' },
  { icon: SiMongodb, color: '#569035', label: 'Mongo Db' },
  { icon: SiPostgresql, color: '#306289', label: 'Postgres' },
];
export const education = [
  {
    qualification: `Remote Full Stack Web Development Program`,
    university: 'Microverse',
    date: 'July 2021 – June 2022',
    grade: null,
    description: `Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux. Additionally,  Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers. `,
  },
  {
    qualification: `Bachelor of Science - BSc, Computer Science (Systems
      Engineering)`,
    university: 'Middlesex University',
    date: 'October 2018 – July 2021',
    grade: 'First Class Honours',
    description: `For my final project titled "Developing Web-Based Selling Platform
              for Small and Medium-Sized Enterprises in Mauritius. The project
              covers a literature review on how the adoption of an online web
              selling application can aid SMEs (especially start-up SMEs) sell
              their products online and the design, development and evaluation
              of an web-based multi-vendor eCommerce application.`,
  },
];

export const experience = [
  {
    role: `Mentor - Volunteer`,
    company: 'Microverse',
    date: 'August 2021 – Present',
    description: `Mentored junior web developers by providing technical support through code reviews
    proposed improvements to code organization to improve code quality and overall performance and
    provided advice and tips on how to maintain motivation to maintain longevity in the program.
    `,
  },
  {
    role: `Full Stack Web Development`,
    company: 'Highlighted personal projects',
    date: 'July 2021 – Present',
    description: `Mastered intermediate and advanced topics in full-stack development (including Rails, Git, and DS&A challenges) while building multiple full-stack projects [SEE Works page] both independently and via pair-programming.
    `,
  },
];

const About = () => {
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
            padding={6}
            bgGradient="linear(to-br, rgba(17, 17, 17, 0.5), rgba(38, 38, 38, 0.5),)"
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
              {myStack.map((item) => (
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
                          <Text color="gray.400" lineHeight={1.8}>
                            {item.description}
                          </Text>
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
