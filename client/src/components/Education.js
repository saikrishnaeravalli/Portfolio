import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Heading, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const EducationPage = () => {
    const [panelsOpen, setPanelsOpen] = useState(false); // State to track panel open/collapse

    useEffect(() => {
        const handleScroll = () => {
            // Collapse panels when scrolling
            setPanelsOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const educationData = [
        {
            university: 'Arizona State University',
            degree: 'Master of Science in Computer Engineering',
            date: 'May 2023',
            coursework: [
                'Distributed Database Systems',
                'Foundations of Algorithms',
                'Software Security',
                'Mobile Computing',
                'Data Mining',
                'Software Verification and Validation',
                'Introduction to Deep Learning',
            ],
        },
        {
            university: 'Sreenidhi Institute of Science & Technology',
            degree: 'Bachelor of Technology in Electrical Engineering',
            date: 'May 2019',
        }
        // Add more education entries as needed
    ];

    return (
        <Flex
            id="education"
            bg="#132c34"
            color="white"
            align="center"
            justify="center"
            py={{ base: '20', md: '40' }}
        >
            <VStack spacing={8} maxW="800px">
                <Heading size="xl">Education</Heading>
                {educationData.map((education, index) => (
                    <Accordion allowToggle key={index} defaultIndex={panelsOpen ? [0] : []}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        width="60vw"
                                        flex="1"
                                        textAlign="left"
                                    >
                                        <Text fontWeight="bold">{education.university}</Text>
                                        <Text>{education.degree}</Text>
                                        <Text>{education.date}</Text>
                                        {education.location && <Text>{education.location}</Text>}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box width="60vw">
                                    <VStack align="start" mt="3">
                                        {education.coursework && (
                                            <Text>
                                                <strong>Coursework:</strong> {education.coursework.join(', ')}
                                            </Text>
                                        )}
                                    </VStack>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
            </VStack>
        </Flex>
    );
};

export default EducationPage;
