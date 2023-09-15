import React from 'react';
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

const ContactPage = () => {
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
