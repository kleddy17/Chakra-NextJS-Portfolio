import React from "react";
import Link from "next/link";

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
    Spacer, 

  } from "@chakra-ui/react";

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
  } from "@chakra-ui/react";

import { useRouter } from 'next/router'
import DarkModeSwitch from "./DarkModeSwitch";
import { FaGithub, FaLinkedin } from 'react-icons/fa';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  
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
        align="center"
        justify="space-between"
        wrap="wrap"
        padding=".5rem"
        zIndex="1"
        color={textColor[colorMode]}
        bgColor={bgColor[colorMode]}
        bgImage="url(./navib.png)"
        bgSize="100vh"
        position="sticky"
      >
        <Link 
          href="https://docs.google.com/document/d/1f0OYxM6fODJtaYysmK_7UnyT_XMPvZhKlfQhas4T20E/edit">
          <a>Resume</a>
        </Link>

        <DarkModeSwitch/>
      
        <Icon 
          as ={FaGithub}
          onClick={gitHub}
        />
        <Icon 
          as ={FaLinkedin}
          onClick={linkedIn}
        />
       
        
      
       
  

      </Flex>
         
      )
  }
  
  export default Navbar
  