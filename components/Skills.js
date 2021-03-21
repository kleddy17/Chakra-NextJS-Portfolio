import React from 'react'
import { FaReact} from 'react-icons/fa';
import {Flex, Icon}  from "@chakra-ui/react";
import { DiPostgresql, DiJavascript1, DiMongodb } from "react-icons/di";
import {AiFillHtml5} from "react-icons/ai"






const Skills = () => {
    return (
        <Flex
        flexDirection = "column"
        align = "flex-start"
        mt = "-3vh">
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

            


          


        </Flex>
    )
}

export default Skills
