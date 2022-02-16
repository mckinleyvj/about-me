import React from 'react';
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import './header.css';
import logoURL from '../../assets/img/logo.png'

function changeBackground(e) {
    e.target.style.background = 'red';
  }

const Header = () => {
  return (
    <Flex w='100vw'>
        <Box w='100%' h='100%' opacity='0.3' pos='fixed'>
            <Image h='100vh' w='100vw' src='https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'/>
        </Box>
        <Flex mt='15%' w='100%' justify='center' align='center'>
        <Box boxShadow='dark-lg' p='6' rounded='15px' textStyle='h1' mr={25} onMouseOver={changeBackground} >
            <Image h='120px' w='120px' src={logoURL} />
        </Box>
        <Box textStyle='h2' ml={25}>
            <Text m={2}>Yakis Sally Hair and Beauty Salon</Text>
            <Flex m={2} justifyContent="flex-end" mr={10} as='u'><a href=''>Book-my-hair</a></Flex>
        </Box>
        
        </Flex>
    </Flex>
  );
};

export default Header;
