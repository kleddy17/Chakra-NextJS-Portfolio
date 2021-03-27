import Head from 'next/head'
import Projects from '../components/Projects'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Profilepic from "../components/Profilepic";
import Aboutme from '../components/Aboutme'

import {
  Box,
  VStack,
 
  
} from "@chakra-ui/react";




export default function Index() {

  const bgColor = {
    light: "rgba(140, 145, 151, 0.7)",
    dark: "rgba(74, 85, 104, 0.9)",
  };

  return (
    <Box 
    bgPosition="center" 
    bgSize="cover" 
    w="100vw" 
    minH="100%"
    position="absolute" 
    overflowX = "scroll"
    h="200vh"
    bgImage= "url('./plant.jpg')"
    >

<VStack  spacing = "8em">
    <Box 
    height = "50%"
    width = "100%"
    > 
      <Header/>
    </Box>
    
    <Box>
      <Profilepic/>
    </Box>
    
   <Box
    height = "50%"
    width = "100%"
   >
    <Aboutme/>
    </Box>



    <Box
     height = "50%"
     width = "100%"
    >


    <Projects/>
    </Box>

    <Box
     height = "50%"
     width = "100%">
    <Skills/> 
    </Box>
    
 

  </VStack> 
    </Box>
  )
}
