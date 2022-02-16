import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMERS } from '../utils/queries';

import { Container, Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

const Home = () => {
 
    const { loading, data } = useQuery(QUERY_CUSTOMERS);
    console.log(loading);
    console.log(data);

  return (
    <Container>
    <Center h="100vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
      </Box>
    </Center>
    </Container>
  );
};

export default Home;
