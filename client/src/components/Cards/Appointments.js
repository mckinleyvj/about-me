import {
    HStack,
    Text,
    useColorModeValue,
    VStack,
    Icon,
    Flex,
    Badge,
  } from "@chakra-ui/react";
  import React from "react";
  import { BiDotsVerticalRounded } from "react-icons/bi";
  import { useNavigate } from "react-router-dom";
  
  const Appointments = ({ appointment }) => {
    const navigate = useNavigate();
    return (
      <Flex
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        // rounded="xl"
        mb="2vh"
        alignItems="center"
        p={5}
        justifyContent="space-between"
        cursor="pointer" >
        <Text
          alignItems="center"
          textAlign="left"
          fontWeight="bold"
          color="neutral.500" >
          {appointment.datetime}
        </Text>
  
        <VStack alignItems="left">
          <HStack>
            <VStack alignItems="left" textAlign="left" spacing={0}>
              
              <Badge colorScheme="green" py={3} px={10} borderRadius="30px">
          {appointment.branch}
        </Badge>
            </VStack>
          </HStack>
        </VStack>

        <Text color="neutral.500" fontSize="1em">
                {appointment.service_type}
              </Text> 
        <Text color="neutral.500" fontSize="1em" fontWeight="bold">
          {appointment.staff}
        </Text>
        <Icon as={BiDotsVerticalRounded} />
      </Flex>
    );
  };
  
  export default Appointments;