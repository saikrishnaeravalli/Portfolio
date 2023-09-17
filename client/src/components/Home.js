import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Link as ChakraLink, Text, useMediaQuery } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';
import sampleImage from '../images/3.jpg';
import { css } from '@emotion/react';
import { useSpring, animated } from 'react-spring';

function Home() {
  const [isNameTransitioned, setIsNameTransitioned] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const initialTimeoutId = setTimeout(() => {
      setIsNameTransitioned(true);
    }, 1000);

    return () => clearTimeout(initialTimeoutId);
  }, []);

  const openResumeInNewTab = async () => {
    try {
      const response = await axios.get('/api/download-resume', {
        responseType: 'blob',
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      window.open(url, '_blank');

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use useMediaQuery to check if it's a mobile screen
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  // Define the spring for the animation based on screen size
  const nameSpring = useSpring({
    from: { fontSize: isMobileScreen ? '36px' : '64px', color: 'black' },
    to: async (next) => {
      await next({ fontSize: isMobileScreen ? '48px' : '96px', color: 'teal' });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      await next({ fontSize: isMobileScreen ? '36px' : '64px', color: 'black' });
    },
    config: {
      duration: 1000, // Animation duration (1 second)
    },
    delay: 500, // Delay the animation by 0.5 seconds
  });

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        id="top"
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
          filter: 'blur(2px)',
          zIndex: '-1',
        }}
      ></div>

      {/* LinkedIn and GitHub icons (always on the right) */}
      <Flex
        as="div"
        position="fixed"
        top="4"
        right="4"
        zIndex="1000"
      >
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/saikrishnaeravalli/"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          fontSize="20px"
          color="black"
          bg="transparent"
          _hover={{ color: '#0077B5', bg: 'transparent', fontSize: '28px' }}
          mr={2}
        />

        <IconButton
          as="a"
          href="https://github.com/saikrishnaeravalli"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub />}
          fontSize="20px"
          color="black"
          bg="transparent"
          _hover={{ color: 'black', bg: 'transparent', fontSize: '28px' }}
        />
      </Flex>

      {/* Render the menu icon */}
      <IconButton
        as="button"
        aria-label="Menu"
        icon={<FaBars />}
        fontSize="20px"
        color="black"
        bg="transparent"
        onClick={toggleMobileMenu}
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        top="4"
        left="4"
        zIndex="1000"
      />

      {isMobileMenuOpen ? (
        // Render the mobile menu when it's open
        <Flex
          as="nav"
          flexDir="column"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(255, 255, 255, 0.9)"
          zIndex="1000"
          alignItems="center"
          justifyContent="center"
        >
          <ScrollLink
            to="top"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={closeMobileMenu}
          >
            <ChakraLink mb="4">Home</ChakraLink>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={closeMobileMenu}
          >
            <ChakraLink mb="4">About</ChakraLink>
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={closeMobileMenu}
          >
            <ChakraLink mb="4">Portfolio</ChakraLink>
          </ScrollLink>
          <ChakraLink onClick={openResumeInNewTab} mb="4">
            Resume
          </ChakraLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={closeMobileMenu}
          >
            <ChakraLink>Contact</ChakraLink>
          </ScrollLink>
        </Flex>
      ) : (
        // Render individual navigation links on larger screens
        <Box
          display={{ base: 'none', md: 'block' }}
          fontSize="18px"
          mx={'auto'}
          position="fixed"
          top="0"
          left="0"
          width="100%"
          p="4"
          color="black"
          zIndex="999"
        >
          <ScrollLink to="top" smooth={true} duration={500} spy={true} exact="true">
            <ChakraLink
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              Home
            </ChakraLink>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true">
            <ChakraLink
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              About
            </ChakraLink>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} spy={true} exact="true">
            <ChakraLink
              mr="4"
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              Portfolio
            </ChakraLink>
          </ScrollLink>
          <ChakraLink
            mr="4"
            _hover={{
              color: 'teal',
              fontSize: '24px',
              transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
            }}
            onClick={openResumeInNewTab}
          >
            Resume
          </ChakraLink>
          <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true">
            <ChakraLink
              _hover={{
                color: 'teal',
                fontSize: '24px',
                transition: 'color 0.3s ease-in-out, font-size 0.3s ease-in-out',
              }}
            >
              Contact
            </ChakraLink>
          </ScrollLink>
        </Box>
      )}

      <Flex
        flex="1"
        align="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Box textAlign="center" fontFamily="IBM Plex Sans KR" color="black">
          <Text
            id="home"
            fontSize={{
              base: isMobileScreen ? '36px' : '64px',
              md: isMobileScreen ? '48px' : '64px',
            }}
            fontWeight="bold"
          >
            Hi, I’m{' '}
            <animated.span
              style={nameSpring}
            >
              Sai Krishna
            </animated.span>
          </Text>
          <Text fontSize={'36px'}>
            A Passionate Full Stack Developer Turning Ideas Into Reality
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Home;
