import Head from 'next/head'
import Projects from '../components/Projects'
import Header from '../components/Header'
import Skills from '../components/Skills'
import  Navbar  from "../components/Navbar";

import {
  Box,
  HStack,
  useColorMode,
  Center,
  Flex,
  Heading,
  Text,
  IconButton,
  Image,
  Icon,
  Button,
  Stack,
  Spacer
  
} from "@chakra-ui/react";
import DarkModeSwitch from '../components/DarkModeSwitch'



export default function Index() {

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(74, 85, 104, 0.9)",
  };

  return (
    // <Box>
    <Box
    bgPosition="center" bgSize="cover" minH="100%" minW="32vw" w="100vw" h="auto" position="fixed" overflowX="scroll" top="0" right="0"
    bgImage= "url('./galaxy.jpg')"
    >
         <Navbar />
      <Header/>
      
      <Projects/>
      <Skills/>
  </Box> 
  // </Box>
  )
}
