import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CUSTOMERS } from '../utils/queries';

import { Container } from "@chakra-ui/react";

const Home = () => {
 
    const { loading, data } = useQuery(QUERY_CUSTOMERS);
    console.log(loading);
    console.log(data);

    const bg = "black";

  return (
    <Container bg={bg} w="100vw">
        {/* <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex> */}
        </Container>
  );
};

export default Home;
