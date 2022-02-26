import {
	Box,
	Center,
	Image,
	Flex,
	HStack,
	Stack,
	Text,
	VStack,
	useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { GET_CUSTOMERINFO, GET_APPOINTMENTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Header from '../components/Header/index';
import Auth from '../utils/auth';
import AppointmentsCard from '../components/Cards/Appointments';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

	const navigate = useNavigate();
	const isLoggedIn = Auth.loggedIn();

	if (!isLoggedIn) {
		navigate('/login');
	}

	const loggedIn_user = Auth.getProfile();

	const { loading: loading1, data: data1 } = useQuery(GET_CUSTOMERINFO, {
		variables: { customerId: loggedIn_user.data._id },
	});

	const cust_info = data1?.customer || [];

	const customer = cust_info.firstname + ' ' + cust_info.lastname;

	const { loading: loading2, data: data2 } = useQuery(GET_APPOINTMENTS, {
		variables: { customer: customer },
	});

	const appt_info = data2?.appointments || [];

	const handleAppt = () => {
		navigate('/appointments');
	};

	return (
		<Box overflowX='hidden'>
			<Box w='100%' h='100%' opacity='0.2' pos='fixed' zIndex='-9999'>
				<Image
					h='100vh'
					w='100vw'
					src='https://images.unsplash.com/photo-1637777269308-6a072f24e8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
				/>
			</Box>
			<Header />
			<Flex h='100vh' alignSelf='center' alignContent='center' flexDirection='column'>
				<Text fontSize='1.5em' textAlign='center' fontWeight='bold'>
					My Dashboard
				</Text>
				{isSmallerThan800 ? (
					<Flex w='95vw' flexDirection='column' alignSelf='center'>
						<Stack w='100%' mr={5}>
							<Flex
								height='20vh'
								alignItems='center'
								borderRadius='5px'
								bgGradient='linear(to-r,green.200 , brand.300)'
								hover={{
									color: 'white',
									bg: 'brand.300',
									ient: 'linear(to-r, brand.300, green.200 )',
								}}
								// p={30}
								sx={{ transition: 'color 0.5s ease 0s' }}>
								<VStack alignItems='left' mx='15'>
									<HStack>
										<Text fontSize='1.3rem' textAlign='left'>
											Hi,
										</Text>{' '}
										<Text fontWeight='bold' fontSize='1.3rem'>
											{cust_info.firstname} {cust_info.lastname}
										</Text>
									</HStack>
									<Text textAlign='left'>
										Lets see what are your scheduled appointments.
									</Text>
								</VStack>
							</Flex>

							<Text textAlign='left' fontSize='1.2em' p={3} fontWeight='bold'>
								Scheduled Appointments
							</Text>

							<Box width='100%' bg='white' borderRadius='5px' height='60%' mt='30px'>
								{appt_info.map((appt) => {
									return <AppointmentsCard appointment={appt} key={appt._id} />;
								})}
							</Box>
						</Stack>
						<Stack w='100%' height='80vh'>
							<Flex
								onClick={handleAppt}
								width='100%'
								bg='white'
								borderRadius='5px'
								h='70px'
								alignItems='center'
								_hover={{ bg: 'brand.200' }}
								cursor='pointer'
								justifyContent='center'>
								<Center
									ml={5}
									w='30px'
									h='30px'
									bgGradient='linear(to-r,green.200 , brand.300)'
									color='white'
									borderRadius='5px'></Center>
								<Text ml={3}>Make an appointment</Text>
							</Flex>
						</Stack>
					</Flex>
				) : (
					<Flex w='80vw' alignSelf='center'>
						<Stack w='70%' mr={5}>
							<Flex
								height='20vh'
								alignItems='center'
								borderRadius='5px'
								bgGradient='linear(to-r,green.200 , brand.300)'
								hover={{
									color: 'white',
									bg: 'brand.300',
									ient: 'linear(to-r, brand.300, green.200 )',
								}}
								p={30}
								sx={{ transition: 'color 0.5s ease 0s' }}>
								<VStack alignItems='left' ml={30}>
									<HStack>
										<Text fontSize='1.3rem' textAlign='left'>
											Hi,
										</Text>{' '}
										<Text fontWeight='bold' fontSize='1.3rem'>
											{cust_info.firstname} {cust_info.lastname}
										</Text>
									</HStack>
									<Text textAlign='left'>
										Lets see what are your scheduled appointments.
									</Text>
								</VStack>
							</Flex>

							<Text textAlign='left' fontSize='1.2em' p={3} fontWeight='bold'>
								Scheduled Appointments
							</Text>

							<Box width='100%' bg='white' borderRadius='5px' height='60%' mt='30px'>
								{appt_info.map((appt) => {
									return <AppointmentsCard appointment={appt} key={appt._id} />;
								})}
							</Box>
						</Stack>
						<Stack w='30%' height='80vh'>
							<Flex
								onClick={handleAppt}
								width='100%'
								bg='white'
								borderRadius='5px'
								h='70px'
								alignItems='center'
								_hover={{ bg: 'brand.200' }}
								cursor='pointer'>
								<Center
									ml={5}
									w='30px'
									h='30px'
									bgGradient='linear(to-r,green.200 , brand.300)'
									color='white'
									borderRadius='5px'></Center>
								<Text ml={3}>Make an appointment</Text>
							</Flex>
						</Stack>
					</Flex>
				)}
			</Flex>
		</Box>
	);
};

export default Dashboard;
