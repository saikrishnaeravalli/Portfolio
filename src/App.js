import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProfessionalExperienceSection from './components/ProfessionalExperience';
import EducationPage from './components/Education';
import ContactPage from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <About />
      <Projects />
      <ProfessionalExperienceSection />
      <EducationPage />
      <ContactPage />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
