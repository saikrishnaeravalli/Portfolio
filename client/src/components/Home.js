// Home.js
import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios'; // Import Axios
import sampleImage from '../images/3.jpg'; // Adjust the path as needed
import { css } from '@emotion/react'; // Import the css function

function Home() {
  const [isNameTransitioned, setIsNameTransitioned] = useState(false);

  useEffect(() => {
    // Trigger the initial transition after 3 seconds of page loading
    const initialTimeoutId = setTimeout(() => {
      setIsNameTransitioned(true);
    }, 1000);

    // Clear the initial timeout on unmount to prevent potential memory leaks
    return () => clearTimeout(initialTimeoutId);
  }, []);

  useEffect(() => {
    // Set a timeout to reset the transition back to normal after 1 second
    if (isNameTransitioned) {
      const resetTimeoutId = setTimeout(() => {
        setIsNameTransitioned(false);
      }, 1000);

      // Clear the reset timeout on unmount to prevent potential memory leaks
      return () => clearTimeout(resetTimeoutId);
    }
  }, [isNameTransitioned]);

  const openResumeInNewTab = async () => {
    try {
      // Make a GET request to your backend's /download-resume route
      const response = await axios.get('/api/download-resume', {
        responseType: 'blob', // Set the response type to 'blob' to handle binary data (e.g., PDF)
      });

      // Create a blob URL for the resume file
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Open the resume in a new tab
      window.open(url, '_blank');

      // Release the blob URL when the tab is closed
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Handle errors as needed
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex', // Use Flexbox to center content
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
      }}
    >
      {/* Pseudo-element for the blurred background */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${sampleImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          filter: 'blur(2px)', // Adjust the blur intensity as needed
          zIndex: '-1', // Place the blurred background behind content
        }}
      ></div>

      <Flex
        as="header"
        align="center"
        justifyContent="space-between"
        p="4"
        top="0"
        width="100%"
        color="black"
        zIndex="999"
      >
        <Box fontSize="18px" mx={'auto'}>
          <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true">
            <Link
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              About
            </Link>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true">
            <Link
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              Portfolio
            </Link>
          </ScrollLink>
          {/* Resume Link */}
          <Link
            mr="4"
            _hover={{
              color: 'teal',
              fontSize: '24px',
              transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
            }}
            onClick={openResumeInNewTab} // Handle click event to open the resume
          >
            Resume
          </Link>
          <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true">
            <Link
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              Contact
            </Link>
          </ScrollLink>
        </Box>
        <Box>
          {/* LinkedIn and GitHub Links */}
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/saikrishnaeravalli/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="20px"
            color="black" // Set the icon color to black
            bg="transparent" // Set the background to transparent
            _hover={{ color: '#0077B5', bg: 'transparent', fontSize: '28px' }} // Set the hover color and background to transparent
            mr={2}
          />

          <IconButton
            as="a"
            href="https://github.com/saikrishnaeravalli"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            fontSize="20px"
            color="black" // Set the icon color to black
            bg="transparent" // Set the background to transparent
            _hover={{ color: 'black', bg: 'transparent', fontSize: '28px' }} // Set the hover color and background to transparent
          />
        </Box>
      </Flex>

      <Flex
        flex="1"
        align="center"
        justifyContent="center"
        flexDirection="column" // Center content vertically
        textAlign="center" // Center text horizontally
      >
        <Box textAlign="center" fontFamily="IBM Plex Sans KR" color="black">
          <Text
            fontSize={{
              base: '36px', // Default font size for mobile screens
              md: '64px', // Font size for larger screens (e.g., tablets and desktops)
            }}
            fontWeight="bold"
          >
            Hi, I’m{' '}
            <span
              css={css`
                color: ${isNameTransitioned ? 'teal' : 'black'};
                font-size: ${isNameTransitioned ? '48px' : '36px'};
                transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;
              `}
            >
              Sai Krishna
            </span>
          </Text>
          <Text fontSize="36px">
            A Passionate Full Stack Developer Turning Ideas Into Reality
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Home;
