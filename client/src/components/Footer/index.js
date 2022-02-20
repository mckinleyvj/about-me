import React, { useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="neutral.500" w="100%">

      <Container color="white" as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid spacing={8}>
          <Stack align={"center"}>
            <Text color="brand.100" fontWeight="bold">Sitemap</Text>
            {/* <Link to="/about/#top">About Us</Link> */}
            <a href='/'>Home</a>
            <a href='/about'>About Us</a>
            <a href='/contact'>Contact Us</a>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={2}>
        <Flex
          align={"center"} borderBottom="1px solid" borderColor={'useColorModeValue("gray.200", "gray.700")'} flexGrow='1' ml='8'>
        </Flex>
        <Text color="white" pt={6} fontSize={"sm"} textAlign={"center"}>
            © 2022 FabulousMe. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;