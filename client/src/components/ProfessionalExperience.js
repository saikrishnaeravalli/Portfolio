import React from 'react';
import {
    Flex,
    VStack,
    Text,
    Heading,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';

const ProfessionalExperienceSection = () => {
    const experienceData = [
        {
            title: 'Full stack Developer',
            company: 'Decision Theatre Network, Tempe, USA',
            details: [
                'Led and managed the entire development process of the eLearning platform, coordinating with a team of 2 developers.',
                'Implemented a robust token-based authentication and authorization mechanisms to secure sensitive data and ensure authorized user access.',
                'Demonstrated exceptional project management and technical skills while leveraging a diverse set of programming languages and frameworks.',
            ],
        },
        {
            title: 'Frontend Developer',
            company: 'Infosys Limited, Hyderabad, India',
            details: [
                'Collaborated with UX designers and back-end developers to enhance 15 web application features, resulting in a 15% improvement in customer satisfaction.',
                'Built a calendar application from scratch, tailored to specific customer needs, resulting in increased user engagement and satisfaction.',
                'Utilized agile framework and Git for streamlined code development and review process.',
            ],
        },
        // Add more experience entries as needed
    ];

    return (
        <Flex
            id="professional-experience"
            bg="#132c34"
            color="white"
            align="center"
            justify="center"
            py={{ base: '20', md: '40' }}
        >
            <VStack spacing={8} maxW="800px">
                <Heading size="xl">Professional Experience</Heading>
                {experienceData.map((experience, index) => (
                    <Accordion allowToggle key={index}>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box
                                        width="60vw" // Set the width to 60% of the viewport width
                                        flex="1"
                                        textAlign="left"
                                    >
                                        <Text fontWeight="bold">{experience.title}</Text>
                                        <Text>{experience.company}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box width="60vw"> {/* Set the width to 60% of the viewport width */}
                                    <VStack align="start" mt="3">
                                        {experience.details.map((detail, idx) => (
                                            <Text key={idx}>{detail}</Text>
                                        ))}
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

export default ProfessionalExperienceSection;
