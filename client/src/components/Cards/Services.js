import { Flex, chakra, Image } from '@chakra-ui/react';
import React from 'react';

const ServicesCard = ({ service }) => {
	return (
		<Flex
			justifyContent='center'
			alignItems='flex-start'
			width='80vw'
			mx='auto'
			mb='7vh'
			_hover={{ rounded: 'lg', boxShadow: 'dark-lg', bg: 'white', cursor: 'pointer' }}
			p={5}>
			<Flex flexDirection='column' justifyContent='center' alignItems='center'>
				<Image
					h='150px'
					w='150px'
					fit='cover'
					borderRadius='5px'
					mt={2}
					mb={2}
					src={require(`../../assets/img/${service.serv_image}`)}
					alt={service.serv_title}
				/>
				<chakra.h1 textAlign='center' color='dark' fontWeight='bold' fontSize='lg'>
					{service.serv_title}
				</chakra.h1>
				<chakra.h1 color='brand.500' fontSize='lg' textAlign='center'>
					{service.serv_desc}
				</chakra.h1>
			</Flex>
		</Flex>
	);
};

export default ServicesCard;
