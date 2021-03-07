import React from 'react'
import {
    useColorMode,
    Button, 
    Flex,
    Box, 
    Image,
    VStack,
    Text
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
     <>
    <Box>
    <VStack display="flex" flexDirection = "row" justifyContent="center" my="200px">
      <Box mx = "50px">
        <Image
        onClick={witchLink}
        src='https://wanderingcrystal.com/wp-content/uploads/2019/08/salem-witch-museum.jpg'
        borderRadius="full"
        boxSize="150px"
        />
      </Box>

      <Box mx = "50px">
        <Image
        onClick={hikingLink}
        src='https://wallpaperaccess.com/full/898085.jpg'
        borderRadius="full"
        boxSize="150px"
        />
        <Text>
          Hiking the White Mountains
        </Text>
       </Box>

       <Box mx = "50px">
        <Image
        onClick={findCareerLink}
        src='https://i.postimg.cc/cCzTyBXD/a2390cc5-18a7-48e0-af19-2d4a76be7ad9-200x200.png'
        borderRadius="full"
        boxSize="150px"
        />
        </Box>
        </VStack>
    </Box>
       
     </>
    )
}

export default Projects
