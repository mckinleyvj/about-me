import React from "react";
import {
    Box,
    Flex,
    Stack,
    Text,
    Grid,
    GridItem,
    Image,
  } from "@chakra-ui/react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
  
  const About = () => {
    return (
      <Box overflowX="hidden">
        <Box w='100%' h='100%' opacity='0.3' pos='fixed' zIndex='-9999'>
            <Image h='100vh' w='100vw' src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'/>
        </Box>
        <Header />
        <Stack direction="column" spacing="auto">
          <Flex direction="column" justifyContent="center" alignItems="center">
            
            <Stack h="88vh" mt="4vh" w='70vw'>
              <Text fontSize="3xl" align='center'>
             About Us
          <Text fontSize="lg">
            {" "}
           How it began{" "}
          </Text>
              </Text>
              <Text
                color="brand.500"
                textAlign="center"
                px={200}
                fontSize="1.2em"
                py={50}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text
              color="gray.500"
              textAlign="center"
              px={200}
              fontSize="1.2em"
              py={50}
              >
                &lt; Reserved &gt;
              </Text>
             
            </Stack>
          </Flex>
          <Box p="50px" alignSelf='center'>
          <Text fontSize="3xl" align='center'>
             Gallery
          <Text fontSize="lg">
            {" "}
           What we do{" "}
          </Text>
              </Text>
            <Grid
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(5, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <Box>
                  <Image
                    src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt="Eyelashes"
                    h="1215px"
                    objectFit="cover"
                  />
                </Box>
              </GridItem>
              <GridItem colSpan={2}>
                <Box>
                  <Image
                    src="https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNhbG9ufGVufDB8fDB8fA%3D%3D"
                    alt="Dan Abramov"
                    h="600px"
                    w="100%"
                    objectFit="cover"
                  />
                </Box>
              </GridItem>
              <GridItem colSpan={2}>
                <Box>
                  <Image
                    src="https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxzYWxvbnxlbnwwfHwwfHw%3D"
                    alt="Dan Abramov"
                    h="600px"
                    w="100%"
                    objectFit="cover"
                  />
                </Box>
              </GridItem>
              <GridItem colSpan={4}>
                <Box>
                  <Image
                    src="https://images.unsplash.com/photo-1629397685944-7073f5589754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    alt="Hair Curling"
                    h="600px"
                    w="100%"
                    objectFit="cover"
                  />
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Stack>
        <Footer />
      </Box>
    );
  };
  
  export default About;