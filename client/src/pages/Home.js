import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import ServicesCard from "../components/Cards/Services.js";
import { GET_SERVICES } from "../utils/queries";

const Home = () => {

  const { loading, data } = useQuery(GET_SERVICES);
  const serviceType = data?.service || [];

  return (
    <Box overflowX="hidden">
      <Box w='100%' h='100%' opacity='0.3' pos='fixed' zIndex='-9999'>
            <Image h='100vh' w='100vw' src='https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'/>
        </Box>
    <Box h='100vh'>
      <Header />

      <Stack px="5vw" mt="25vh">
        <Stack mb="5vh">
          <Text textAlign="left" fontSize="4em" fontWeight='bold' w="45vw" color="brand.500">
            Fabulous Me.
          </Text>
          <Text textAlign="left" fontSize="1.5em">
            Yakis Sally Hair and Beauty Salon SDN BHD
          </Text>
          <Text textAlign="left" fontSize="1.5em" lineHeight={0}>
            Brunei Darussalam
          </Text>
        </Stack>

        <Button w="250px" borderRadius="15px" bg="brand.500" color="white" _hover={{bg: "brand.100", color: "brand.500", boxShadow:'dark-lg'}} >
          Save the Date
        </Button>
      </Stack>
    </Box>
    <Box bg="brand.200" h="70vh" opacity='0.8' >
      <Text align='center' fontWeight="bold" fontSize="2em" pt="5vh" pb="2vh">
        OUR{" "}
        <Box as={"span"} color="brand.500">
          SERVICES
        </Box>
      </Text>
   
      <Box px="5vw">
        <Flex mt="6vh" flexDirection='row' justify='center' spacing="auto">
          {serviceType.map((service) => {
            return <ServicesCard key={service._id} service={service} />;
          })}
        </Flex>
      </Box>
    </Box>
    
    <Footer />
  </Box>
)
};

export default Home;
