import React from 'react'
import { FaReact} from 'react-icons/fa';
import {Flex, Icon}  from "@chakra-ui/react";
import { DiPostgresql, DiJavascript1 } from "react-icons/di";


const Skills = () => {
    return (
        <Flex>
            <DiPostgresql
            size = {70}
            />

            <FaReact
            size = {70}
            />

            <DiJavascript1
            size = {70}
            />


        </Flex>
    )
}

export default Skills
