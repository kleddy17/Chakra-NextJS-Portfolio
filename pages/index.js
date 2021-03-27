import Head from 'next/head'
import Projects from '../components/Projects'
import Header from '../components/Header'
import Skills from '../components/Skills'
import  Navbar  from "../components/Navbar";
import Aboutme from '../components/Aboutme'

import {
  Box,
  VStack,
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
    <Box 
    overflowX = "scroll"
    h="200vh"
    >

<VStack>
    <Box
    bgPosition="center" 
    bgSize="cover" 
    w="100vw" 
    minH="100%"
    position="absolute"  
    bgImage= "url('./plant.jpg')"
    
    
    >
    
    <Header/>
    
    <Aboutme/>
 
    <Projects/>
 
    <Skills/> 
    
  </Box> 

  </VStack> 
   </Box>
  )
}
