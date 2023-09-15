import React, { useState, useEffect } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setIsHeaderVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <Flex
            as="header"
            align="center"
            justifyContent="space-between" // Adjusted justifyContent
            p="4"
            boxShadow="md"
            position="sticky"
            top="0"
            width="100%"
            bg={isHeaderVisible ? '#132c34' : 'transparent'}
            color="white"
            transition="background-color 0.3s ease-in-out"
        >
            {/* Logo */}
            <Text fontSize="xl" fontWeight="bold" fontStyle="italic">
                SK
            </Text>

            {/* Navigation Links */}
            <Box>
                <ScrollLink to="about" smooth={true} duration={500} offset={-50} spy={true} exact="true">
                    <Link mr="4" _hover={{ textDecoration: 'underline' }}>
                        About
                    </Link>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} offset={-50} spy={true} exact="true">
                    <Link mr="4" _hover={{ textDecoration: 'underline' }}>
                        Projects
                    </Link>
                </ScrollLink>
                <ScrollLink to="professional-experience" smooth={true} duration={500} offset={-50} spy={true} exact="true">
                    <Link mr="4" _hover={{ textDecoration: 'underline' }}>
                        Experience
                    </Link>
                </ScrollLink>
                <ScrollLink to="education" smooth={true} duration={500} offset={-50} spy={true} exact="true">
                    <Link mr="4" _hover={{ textDecoration: 'underline' }}>
                        Education
                    </Link>
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-50} spy={true} exact="true">
                    <Link mr="4" _hover={{ textDecoration: 'underline' }}>
                        Contact
                    </Link>
                </ScrollLink>
                {/* Add more links with ScrollLink and Link as needed */}
            </Box>
        </Flex>
    );
}

export default Header;
