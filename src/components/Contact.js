import React from 'react';
import { Flex, Box, Heading, Text, VStack, Button, Link, Icon, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <Flex
            id="contact"
            bg="#132c34"
            color="white"
            align="center"
            justify="center"
            py={{ base: '20', md: '40' }}
        >
            <VStack spacing={8} maxW="800px">
                <Heading size="xl">Contact Me</Heading>
                <Box
                    bg="white"
                    p="6"
                    borderRadius="lg"
                    boxShadow="md"
                    color="black"
                    style={{ width: '100%' }} // Set width to 60% of the screen width using inline styles
                >
                    <Text>If you have any questions or would like to get in touch, please fill out the form below:</Text>
                    <VStack spacing={4} mt={6} width="100%">
                        <FormControl id="name">
                            <FormLabel>Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="message">
                            <FormLabel>Message</FormLabel>
                            <Textarea />
                        </FormControl>
                        <Button colorScheme="teal" size="lg">
                            Send Message
                        </Button>
                        <Text>Or you can <Link href="mailto:saikrishnaeravalli@gmail.com" color="teal.500"><Icon as={FaEnvelope} mr={1} />send an email directly</Link>.</Text>
                    </VStack>
                </Box>
            </VStack>
        </Flex>
    );
};

export default ContactPage;
