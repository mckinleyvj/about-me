import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, Flex, Stack, Text, Image, useMediaQuery } from '@chakra-ui/react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import ServicesCard from '../components/Cards/Services.js';
import { GET_SERVICES } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';

const Home = () => {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
	// const [isSmallerThan425] = useMediaQuery('(max-width: 425px)');

	const navigate = useNavigate();
	const { loading, data } = useQuery(GET_SERVICES);
	const serviceType = data?.service || [];

	const isLoggedIn = Auth.loggedIn();

	return (
		<Box overflowX='hidden'>
			<Box w='100%' h='100%' opacity='0.3' pos='fixed' zIndex='-9999'>
				<Image
					h='100vh'
					w='100vw'
					src='https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
				/>
			</Box>
			<Box h='100vh'>
				<Header />
				{isSmallerThan800 ? (
					<Stack px='5vw' mt='25vh'>
						<Stack mb='5vh'>
							<Text
								textAlign='left'
								fontSize='2em'
								fontWeight='bold'
								w='100vw'
								color='brand.500'
								letterSpacing='0.5rem'>
								Fabulous Me.
							</Text>
							<Text textAlign='left' fontSize='0.8em' letterSpacing='0.2rem'>
								Yakis Sally Hair and Beauty Salon
							</Text>
							<Text
								textAlign='left'
								fontSize='0.8em'
								letterSpacing='0.2rem'
								lineHeight={1}>
								Brunei Darussalam
							</Text>
						</Stack>
						{isLoggedIn === true ? (
							<Button
								w='250px'
								borderRadius='15px'
								bg='brand.500'
								color='white'
								_hover={{
									bg: 'brand.100',
									color: 'brand.500',
									boxShadow: 'dark-lg',
								}}
								onClick={() => navigate(`/appointments`)}>
								Save the Date
							</Button>
						) : (
							<Button
								w='150px'
								borderRadius='15px'
								bg='brand.500'
								color='white'
								_hover={{
									bg: 'brand.100',
									color: 'brand.500',
									boxShadow: 'dark-lg',
								}}
								onClick={() => navigate(`/login`)}>
								Save the Date
							</Button>
						)}
					</Stack>
				) : (
					<Stack px='5vw' mt='25vh'>
						<Stack mb='5vh'>
							<Text
								textAlign='left'
								fontSize='4em'
								fontWeight='bold'
								w='45vw'
								color='brand.500'
								letterSpacing='0.5rem'>
								Fabulous Me.
							</Text>
							<Text textAlign='left' fontSize='1.5em' letterSpacing='0.7rem'>
								Yakis Sally Hair and Beauty Salon
							</Text>
							<Text
								textAlign='left'
								fontSize='1.5em'
								lineHeight={1}
								letterSpacing='0.7rem'>
								Brunei Darussalam
							</Text>
						</Stack>
						{isLoggedIn === true ? (
							<Button
								w='250px'
								borderRadius='15px'
								bg='brand.500'
								color='white'
								_hover={{
									bg: 'brand.100',
									color: 'brand.500',
									boxShadow: 'dark-lg',
								}}
								onClick={() => navigate(`/appointments`)}>
								Save the Date
							</Button>
						) : (
							<Button
								w='250px'
								borderRadius='15px'
								bg='brand.500'
								color='white'
								_hover={{
									bg: 'brand.100',
									color: 'brand.500',
									boxShadow: 'dark-lg',
								}}
								onClick={() => navigate(`/login`)}>
								Save the Date
							</Button>
						)}
					</Stack>
				)}
			</Box>
			{isSmallerThan800 ? (
				<Flex bg='brand.200' minH='70vh' opacity='0.8' flexDirection='column'>
					<Text align='center' fontWeight='bold' fontSize='1.5em' pt='5vh' pb='2vh'>
						OUR{' '}
						<Box as={'span'} color='brand.500'>
							SERVICES
						</Box>
					</Text>
					<Flex>
						<Flex
							mt='6vh'
							width='100vw'
							flexDirection='column'
							justify='center'
							spacing='auto'>
							{serviceType.map((service) => {
								return <ServicesCard key={service._id} service={service} />;
							})}
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Box bg='brand.200' minH='70vh' opacity='0.8'>
					<Text align='center' fontWeight='bold' fontSize='2em' pt='5vh' pb='2vh'>
						OUR{' '}
						<Box as={'span'} color='brand.500'>
							SERVICES
						</Box>
					</Text>

					<Box px='5vw'>
						<Flex mt='6vh' flexDirection='row' justify='center' spacing='auto'>
							{serviceType.map((service) => {
								return <ServicesCard key={service._id} service={service} />;
							})}
						</Flex>
					</Box>
				</Box>
			)}

			<Footer />
		</Box>
	);
};

export default Home;
