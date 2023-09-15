import { Box, Flex, Text, Heading } from '@chakra-ui/react';

function About() {
    const skills = [
        "Angular",
        "React",
        "Node",
        "Express",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "SQL",
        "NoSQL"
    ];

    return (
        <Flex
            id="about"
            minH="100vh"
            bg="#F5F5F5"
            color="black"
            align="center"
            justify="center"
            direction="column"
        >
            <Flex
                maxW="80%"
                direction={{ base: 'column', md: 'row' }}
                align="center"
                p="4"
                justifyContent="space-between"
            >
                <Box flex="1">
                    {/* Circular image */}
                    <Box
                        width="100%" // 100% of screen width
                        maxWidth="200px" // Increase the maximum width to make the image larger
                        borderRadius="50%" // Circular shape
                        overflow="hidden"
                    >
                        <img
                            src="https://via.placeholder.com/200" // Placeholder image URL
                            alt="Placeholder Icon"
                            width="100%" // Adjust the size as needed
                        />
                    </Box>
                </Box>
                <Box flex="1" pl={{ base: '0', md: '4' }}>
                    <Heading as="h2" fontSize="3xl" mb="4" textAlign={{ base: 'center', md: 'left' }}>
                        About Me
                    </Heading>
                    <Text fontSize="xl" mb="4" textAlign={{ base: 'center', md: 'left' }} className="responsive-text">
                        Driven by a desire to create, I've brought numerous projects to life, showcasing my skills in action. These experiences have allowed me to refine my abilities over the years, developing a diverse skill set that combines front-end and back-end expertise. With a deep-rooted passion for coding excellence, I take pride in turning ideas into reality.
                    </Text>

                    <Heading as="h3" fontSize="2xl" mb="4" textAlign="center">
                        Skills
                    </Heading>

                    <Flex flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
                        {skills.map((skill, index) => (
                            <Text key={skill} fontSize="lg" mr="4" mb={{ base: '2', md: '0' }}>
                                {skill}
                            </Text>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
}

export default About;
