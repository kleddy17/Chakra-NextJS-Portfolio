import customTheme from '../styles/theme'
import { Box, ChakraProvider, VStack, extendTheme, ColorModeProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'

import Projects from '../components/Projects'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return(
  
  <ChakraProvider >
  {/* <Fonts /> */}
   {/* <Navbar /> */}
   <Box>
   <Component {...pageProps} />
   </Box>
  
   </ChakraProvider>
  
 )
}

export default MyApp
