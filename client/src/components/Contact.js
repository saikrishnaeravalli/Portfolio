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
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaEnvelope, FaCheck } from 'react-icons/fa';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSendMessage = async () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!name) {
      setNameError('Name is required');
      return;
    }
    if (!message) {
      setMessageError('Message is required');
      return;
    }

    try {
      const data = {
        name,
        email,
        message,
      };

      const response = await axios.post('/api/send-email', data);

      console.log('Email sent successfully:', response.data);

      setShowSuccessNotification(true);

      setName('');
      setEmail('');
      setMessage('');
      setEmailError('');
      setNameError('');
      setMessageError('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleEmailBlur = () => {
    if (email && !validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleFormInputChange = () => {
    if (showSuccessNotification) {
      setShowSuccessNotification(false);
    }
    if (emailError) {
      setEmailError('');
    }
    if (nameError) {
      setNameError('');
    }
    if (messageError) {
      setMessageError('');
    }
  };

  // Disable the "Send Message" button if any required field is empty or if email format is invalid
  const isSendMessageDisabled = !name || !email || !message || !validateEmail(email);

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
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              handleFormInputChange();
              setName(e.target.value);
            }}
          />
          {nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
        </FormControl>
        <FormControl id="email" isRequired isInvalid={emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onBlur={handleEmailBlur}
            onChange={(e) => {
              handleFormInputChange();
              setEmail(e.target.value);
            }}
          />
          {emailError && <FormErrorMessage>{emailError}</FormErrorMessage>}
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => {
              handleFormInputChange();
              setMessage(e.target.value);
            }}
          />
          {messageError && <FormErrorMessage>{messageError}</FormErrorMessage>}
        </FormControl>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={handleSendMessage}
          isDisabled={isSendMessageDisabled}
        >
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
            color="green"
            bg="transparent"
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
