import React from 'react'
import {
    Box,
    HStack,
    useColorMode,
    Center,
    Flex,
    Heading,
    Text,
  
    Image,
    
  } from "@chakra-ui/react";

const Header = () => {
    return (
       <>
       <Box
    //    border="2px solid rgba(212, 175, 53, 0.5)" 
       width="25%" 
       height="25vh" 
       marginLeft="37%"
       mt="18vh"
       justifyContent="center" 
       alignContent="center"
       alignItems="center" 
       textAlign="center" 
       color="pink.500"
       fontWeight="semibold"
       letterSpacing="wide"
       fontSize="xs"
       textTransform="uppercase"
            >
           <Heading>
               Kristi Eddy
               <Text>
                   Software Engineer
               </Text>
           </Heading>
       </Box>
       </>
    )
}

export default Header
