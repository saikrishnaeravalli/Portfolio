import React, { useState } from 'react';
import {
  Flex,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios'; // Import Axios

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      // Create an object with the user's data
      const data = {
        name,
        email,
        message,
      };

      // Send a POST request to the backend's /send-email endpoint
      const response = await axios.post('/api/send-email', data);

      // Handle the response as needed (e.g., show a success message)
      console.log('Email sent successfully:', response.data);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle errors as needed (e.g., show an error message)
    }
  };

  return (
    <Flex
      id="contact"
      bg="whitesmoke"
      color="black"
      align="center"
      justify="center"
      minH="100vh"
      direction="column"
      textAlign="center"
    >
      <Heading size="xl" mb={4}>
        Get In Touch
      </Heading>
      <Text mb={6}>
        Reach out for projects, collaborations, or any inquiries. Let's connect
        and create together.
      </Text>
      <VStack
        spacing={4}
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        color="#654321"
        width="80%"
      >
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSendMessage}>
          Send Message
        </Button>
        <Stack direction="row" align="center">
          <Text fontWeight="bold" color="black">
            You can{' '}
          </Text>
          <Icon as={FaEnvelope} color={'teal'} boxSize={4} />
          <Text color={'teal'}>
            <Link href="mailto:saikrishnaeravalli@gmail.com">
              send an email directly
            </Link>
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default ContactPage;
