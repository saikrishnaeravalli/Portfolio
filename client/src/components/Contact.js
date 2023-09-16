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
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from '@chakra-ui/react';
import { FaEnvelope, FaCheck } from 'react-icons/fa'; // Import FaCheck icon
import axios from 'axios'; // Import Axios

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

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

      // Display success notification
      setShowSuccessNotification(true);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle errors as needed (e.g., show an error message)
    }
  };

  // Function to reset the success notification when form fields are edited
  const handleFormInputChange = () => {
    if (showSuccessNotification) {
      setShowSuccessNotification(false);
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
            onChange={(e) => {
              handleFormInputChange(); // Call the function to reset the success notification
              setName(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              handleFormInputChange(); // Call the function to reset the success notification
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => {
              handleFormInputChange(); // Call the function to reset the success notification
              setMessage(e.target.value);
            }}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSendMessage}>
          Send Message
        </Button>
        {showSuccessNotification && (
          <Alert
            status="success"
            variant="solid"
            borderRadius="md"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mt={4}
            color="green" // Set text color to green
            bg="transparent" // Remove background color
          >
            <AlertIcon as={FaCheck} color="green.500" boxSize={6} />
            <AlertTitle ml={2}>Message Sent!</AlertTitle>
            <CloseButton
              onClick={() => setShowSuccessNotification(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}
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
