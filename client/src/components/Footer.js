import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="#132c34" color="white" p="4">
      <Flex justify="center" align="center">
        <Box>
          <Link href="#" mx="2" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link href="#about" mx="2" _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
          <Link href="#projects" mx="2" _hover={{ textDecoration: 'underline' }}>
            Projects
          </Link>
          <Link href="#professional-experience" mx="2" _hover={{ textDecoration: 'underline' }}>
            Experience
          </Link>
          <Link href="#education" mx="2" _hover={{ textDecoration: 'underline' }}>
            Education
          </Link>
          <Link href="#contact" mx="2" _hover={{ textDecoration: 'underline' }}>
            Contact
          </Link>
        </Box>
      </Flex>
      <Flex justify="center" align="center" mt="2">
        <Box>
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
