import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import About from './components/About';
import Projects from './components/Projects';
import ContactPage from './components/Contact';
import Home from './components/Home';

function App() {
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
