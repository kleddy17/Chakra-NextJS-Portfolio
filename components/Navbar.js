import React from "react";
import Link from "next/link";

import {
    useColorMode,
    Center,
    Flex,
    Heading,
    Text,
    IconButton,
    Image,
    Icon,

  } from "@chakra-ui/react";


import { useRouter } from 'next/router'
import DarkModeSwitch from "./DarkModeSwitch";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

  

const Navbar = () => {
    const router = useRouter();

    const bgColor = {
        light: "rgba(140, 145, 151, 0.7)",
        dark: "rgba(74, 85, 104, 0.9)",
      };
      const textColor = { light: "rgb(0, 0, 0)", dark: "gray.100" };
      const { colorMode, toggleColorMode } = useColorMode();
    
      const MenuItems = ({ children }) => (
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
          {children}
        </Text>
      );

      const gitHub = () => {
        window.location = "https://github.com/kleddy17"
      }
      
      const linkedIn = () => {
        window.location = "https://www.linkedin.com/in/kristi-eddy-72bb281b5/"
      }



      return (

      <Flex
        as="nav"
        wrap="wrap"
        padding=".5rem"
        zIndex="1"
        color={textColor[colorMode]}
        bgColor={bgColor[colorMode]}
        bgImage="url(./navib.png)"
        bgSize="100vh"
        position="sticky"
        justify = "space-between"
        align = "center"

      >

          <Link 
            href="https://docs.google.com/document/d/1lG6vHZHxtiHYsi78aopAndQFZVytrZ2wILlZve75ZxA/edit?usp=sharing">
              
            <Text
             size ="xl"
             as="button"
             bg="gray.500"
             py={2}
             px={4}
             ml={3}
             rounded="md"
             fontWeight="semibold"
             color="black"
             _hover={{ bg: "white" }}
             _focus={{ boxShadow: "outline" }}>
              Resume
            </Text>
          </Link>
   
          <DarkModeSwitch/>

          <Icon 
          as ={FaGithub}
          onClick={gitHub}
          width = "2em"
          height = "2em"
          _hover={{ color: "magenta"}}
          // _focus={{ boxShadow: "outline" }}
          />

          <Icon 
          as ={FaLinkedin}
          onClick={linkedIn}
          width = "2em"
          height = "2em"
          _hover={{ color: "magenta"}}
          />
      </Flex>
         
      )
  }
  
  export default Navbar
  