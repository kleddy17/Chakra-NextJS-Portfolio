import React from 'react'
import { FaReact} from 'react-icons/fa';
import {Flex, Icon, Box, Grid, GridItem, HStack, Center, Image, Text}  from "@chakra-ui/react";
import { DiPostgresql, DiJavascript1, DiMongodb } from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai"





const Skills = () => {
    return (
        <Center>
        <Box 
        width="50%" 
        height="13vh" 
        // border = "2px solid red"
        textAlign="center" 
        
        > 
        <Text
        as = "u"
        color = "#EDF2F7"
        fontSize = "4em"
        fontWeight = "medium"
        >
        SKILLS
        </Text>
        <Center>
       <HStack>
            <DiPostgresql
            size = {70}
            />

            <FaReact
            size = {70}
            />

            <DiJavascript1
            size = {70}
            />

            <DiMongodb
            size = {70}/>

            <AiFillHtml5
            size = {70}
            />

            {/* <Image
              w="18vw"
              h="15vh"
              borderRadius="16"
              mt="0"
              mb="-12"
              src="./sequelize.png"
            /> */}
        </HStack>
        </Center>

</Box>

</Center>
     
    )
}

export default Skills
