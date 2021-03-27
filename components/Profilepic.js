import { Box, Center } from '@chakra-ui/layout'
import {Image} from "@chakra-ui/react";
import React from 'react'

const Profilepic = () => {
    return (
     <Center>
         <Box
         mt="-15vh"
         mr = "1vw"
        //  border = '8px solid green'
         mb= "2vh"
         boxShadow="xs" p="6" rounded="md"
         >
            <Image
                borderRadius="50vh"
                // border= "2px solid red"
                src="./mom.jpeg"
            />

        </Box>

     </Center>
    )
}

export default Profilepic
