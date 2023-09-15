import React, { useState } from 'react';
import {
  Button,
  Flex,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import sampleImage from '../images/sampleLogo.jpeg';
import sampleImage2 from '../images/sample.jpeg';

import './Projects.css'; // Import the CSS file with the styles

const projects = [
  {
    title: 'ECommerce App',
    description: "Shop smarter with our MEAN stack-powered e-commerce app. Streamlined, efficient, and easy to use – it's your gateway to a world of products at your fingertips.",
    image: sampleImage,
  },
  {
    title: 'Learning Management System',
    description: "Unlock a world of learning with our MERN stack-powered LMS application. Seamlessly access courses, resources, and assessments while tracking your progress. It's the modern way to educate and upskill anytime, anywhere.",
    image: sampleImage2,
  },
  {
    title: 'Travel App',
    description: "Embark on your next adventure with ease using our MEAN stack-powered travel booking app. Plan, book, and explore your dream destinations effortlessly. Enjoy a seamless travel experience from start to finish with our intuitive and comprehensive platform.",
  },
  {
    title: 'Flight Booking App',
    description: "Fly high with our MEAN stack-powered flight booking app. Discover the quickest, most convenient way to search, book, and manage your flights. Your journey begins with a single tap.",
  },
  // Add more project titles and descriptions as needed
];

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`project-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        <div className={`front ${isFlipped ? 'hidden' : ''}`} style={{ backgroundColor: "#BBC7CE" }}>
          <div className="project-title">{project.title}</div>
        </div>
        <div className={`back ${isFlipped ? '' : 'hidden'}`} style={{ backgroundColor: "#BBC7CE" }}>
          <div style={{fontSize:'16px'}}>{project.description}</div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <Flex
    id="projects"
    bg="#F5F5F5"
    color="black"
    align="center"
    justify="center"
    minH="100vh"
  >
    <VStack spacing={8} textAlign="center" maxW="800px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%" height="100%">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  </Flex>
);

export default Projects;
