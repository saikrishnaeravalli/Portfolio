import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const projects = [
  {
    title: 'React Space',
    description: 'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
  },
  {
    title: 'React Infinite Scroll',
    description: 'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
  },
  {
    title: 'Photo Gallery',
    description: 'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
  },
  {
    title: 'Event planner',
    description: 'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
  },
  // Add more project objects as needed
];

const Projects = () => (
  <Flex
    id="projects"
    bg="#132c34"
    color="white"
    align="center"
    justify="center"
    py={{ base: '20', md: '40' }}
  >
    <VStack spacing={8} textAlign="center" maxW="800px">
      <Heading size="xl">Featured Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project, index) => (
          <Box key={index} p="4" border="1px solid #E2E8F0" borderRadius="md">
            <Heading size="md" mb="2">
              {project.title}
            </Heading>
            <Text>{project.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  </Flex>
);

export default Projects;
