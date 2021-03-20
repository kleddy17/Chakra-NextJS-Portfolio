import React from 'react'
import {
    Box,
    Heading,
  } from "@chakra-ui/react";

const Header = () => {


    const textColor = { light: "black", dark: "gray.100" };


    return (
       <>
       <Box
       width="25%" 
       height="25vh" 
       marginLeft="37%"
       mt="18vh"
       textAlign="center" 
       fontWeight="semibold"
       letterSpacing="wide"
       textTransform="uppercase"
        >
           <Heading
                as = "h1" 
                size = "3xl"
            >
            Kristi Eddy  
           </Heading>

            <Heading
                as= "h2"
                size = "lg"
                w = "100%"
                >
            Software Engineer
            </Heading>

       </Box>
       </>
    )
}

export default Header
