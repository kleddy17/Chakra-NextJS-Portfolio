import React from 'react'
import {
    useColorMode,
    Button, 
    Flex,
    Box, 
    Image,
    VStack,
    HStack,
    Text,
    Center
} from "@chakra-ui/react"



const Projects = ({children}) => {

    const hikingLink = () => {
        window.location = "https://hiking-the-white-mountains.herokuapp.com/hikes"
      }
      
      const witchLink = () => {
        window.location = "https://kleddy17.github.io/Project-1-/"
      }
      
      const findCareerLink = () => {
        window.location = "http://findcareer.surge.sh/login"
      }
    return (
 
    <Center>
      <Box
      textAlign = "center"
      >
      <Text
        as = "u"
        color = "#EDF2F7"
        fontSize = "4em"
        fontWeight = "medium"
        
        >
        PROJECTS
        </Text>
    <HStack>

        <Image
        onClick={witchLink}
        src='https://wanderingcrystal.com/wp-content/uploads/2019/08/salem-witch-museum.jpg'
        borderRadius="full"
        boxSize="150px"
        />



        <Image
        onClick={hikingLink}
        src='https://wallpaperaccess.com/full/898085.jpg'
        borderRadius="full"
        boxSize="150px"
        />
   
        <Image
        onClick={findCareerLink}
        src='https://i.postimg.cc/cCzTyBXD/a2390cc5-18a7-48e0-af19-2d4a76be7ad9-200x200.png'
        borderRadius="full"
        boxSize="150px"
        />

</HStack>       

</Box>
</Center>
    )
}

export default Projects
