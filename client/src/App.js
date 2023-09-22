import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import About from './components/About';
import Projects from './components/Projects';
import ContactPage from './components/Contact';
import Home from './components/Home';
import axios from 'axios';

function App() {

  useEffect(() => {
    // Send a request to the server to record the visit
    axios.post('/api/record-visit')
      .catch(error => console.error('Error recording visit:', error));
  }, []);

  return (
    <ChakraProvider>
      <Home />
      <About />
      <Projects />
      <ContactPage />
    </ChakraProvider>
  );
}

export default App;
