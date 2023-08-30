import { Box, Flex, Text } from '@chakra-ui/react';

function About() {


    return (
        <Flex
            id="about"
            minH="100vh"
            py="20"
            bg="#132c34"
            color="white"
            align="center"
            justify="center"
        >
            <Flex maxW="800px" direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'flex-start' }} p="4">
                <Box maxW="500px">
                    <Text fontSize="xl">
                        Hi there! I'm{' '}
                        <Text
                            as="span"
                            color="#42a5f5"
                            ml="2"
                            fontWeight="bold"
                            className="animated-name"
                        >
                            Your Name
                        </Text>
                        , a frontend developer passionate about creating beautiful and user-friendly web applications.
                    </Text>
                    <Text mt="2">
                        I have experience with technologies like React, Angular, HTML, CSS, and JavaScript. I'm always eager to learn and take on new challenges in the world of web development.
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;
