import { Box, ChakraProvider, extendTheme, ColorModeProvider } from '@chakra-ui/react';
import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css' 
// Import the CSS
config.autoAddCss = false

//creating a theme within the app.js and the just calling it on the Chakra Provider
const theme = extendTheme({
  fonts: {
    heading: 'Philosopheri',
    body: 'Philosopher',
  },
})


function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider theme={theme}>
    <Box>
      <Component {...pageProps} />
    </Box>
  </ChakraProvider>
  
 )
}

export default MyApp
