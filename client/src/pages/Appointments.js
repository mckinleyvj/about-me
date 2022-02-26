import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	Flex,
	Image,
	Select,
	useMediaQuery,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ADD_APPOINTMENT } from '../utils/mutations';
import { GET_CUSTOMERINFO } from '../utils/queries';
import Auth from '../utils/auth';

const Appointments = () => {
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

	const [userFormInput, setUserFormInput] = useState({
		service_type: '',
		customer: customer,
		datetime: '',
		branch: '',
		staff: '',
		approved: false,
	});

	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		setError(false);
		const { name, value } = e.target;
		setUserFormInput({ ...userFormInput, [name]: value });
	};

	const [addAppointment] = useMutation(ADD_APPOINTMENT);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await addAppointment({ variables: { ...userFormInput } });
			window.location.replace('/dashboard');
		} catch (err) {
			setError(true);
			console.error(err);
		}
	};

	return (
		<Flex overflowX='hidden' h='100vh' justifyContent='center' alignItems='center'>
			<Box w='100%' h='100%' opacity='0.1' pos='fixed' zIndex='-9999'>
				<Image
					h='100vh'
					w='100vw'
					src='https://images.unsplash.com/photo-1644916081706-e98b1fadc319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
				/>
			</Box>
			{isSmallerThan800 ? (
				<Flex flexDirection='column'>
					<Flex
						w='95vw'
						alignSelf='center'
						flexDirection='column'
						justifyContent='center'>
						<Text align='left' fontSize='2rem'>
							Schedule an appointment
						</Text>
						<Text align='left' color='brand.500' fontSize='0.8rem'>
							Lorem ipsum. Enter a brief description for your signup page.
						</Text>
						<form id='appointment' className='appointment' onSubmit={handleFormSubmit}>
							<FormControl mt='2vh' isRequired>
								<FormLabel>Service Type</FormLabel>
								<Select
									id='serv_type'
									name='service_type'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Hair'>Hair</option>
									<option value='Nail'>Nail</option>
									<option value='Beauty'>Beauty</option>
									<option value='Waxing'>Waxing</option>
								</Select>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Schedule Date</FormLabel>
								<Input
									id='sched_date'
									name='datetime'
									type='date'
									value={userFormInput.datetime}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Branch</FormLabel>
								<Select
									id='branch_loc'
									name='branch'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Bengkurong'>Bengkurong</option>
									<option value='Mentiri'>Mentiri</option>
									<option value='Tutong'>Tutong</option>
									<option value='Gadong'>Gadong</option>
								</Select>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Preferred Staff</FormLabel>
								<Select
									id='pref_staff'
									name='staff'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Catherine'>Catherine</option>
									<option value='Kate'>Kate</option>
									<option value='Jessica'>Jessica</option>
									<option value='Amanda'>Amanda</option>
									<option value='Patricia'>Patricia</option>
									<option value='Mandy'>Mandy</option>
									<option value='Jane'>Jane</option>
									<option value='Claire'>Claire</option>
									<option value='Naomi'>Naomi</option>
									<option value='Olivia'>Olivia</option>
									<option value='Catriona'>Catriona</option>
								</Select>
							</FormControl>
							{error === true ? (
								<Box mt='5'>
									<Flex color='red'>Error: </Flex>
									<Flex>Missing value required. Please check form.</Flex>
								</Box>
							) : (
								''
							)}
							<Button
								mt='3vh'
								mb='2vh'
								type='submit'
								width='100%'
								_focus={{ outline: 'none' }}
								_active={{ outline: 'none' }}>
								Set me up!
							</Button>
							<Button
								type='submit'
								width='100%'
								_focus={{ outline: 'none' }}
								_active={{ outline: 'none' }}
								onClick={() => navigate(`/dashboard`)}>
								Back to Dashboard
							</Button>
						</form>
					</Flex>
				</Flex>
			) : (
				<Flex flexDirection='column'>
					<Flex
						w='30vw'
						alignSelf='center'
						flexDirection='column'
						justifyContent='center'>
						<Text align='left' fontSize='2rem'>
							Schedule an appointment
						</Text>
						<Text align='left' color='brand.500' fontSize='0.8rem'>
							Lorem ipsum. Enter a brief description for your signup page.
						</Text>
						<form id='appointment' className='appointment' onSubmit={handleFormSubmit}>
							<FormControl mt='2vh' isRequired>
								<FormLabel>Service Type</FormLabel>
								<Select
									id='serv_type'
									name='service_type'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Hair'>Hair</option>
									<option value='Nail'>Nail</option>
									<option value='Beauty'>Beauty</option>
									<option value='Waxing'>Waxing</option>
								</Select>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Schedule Date</FormLabel>
								<Input
									id='sched_date'
									name='datetime'
									type='date'
									value={userFormInput.datetime}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>Branch</FormLabel>
								<Select
									id='branch_loc'
									name='branch'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Bengkurong'>Bengkurong</option>
									<option value='Mentiri'>Mentiri</option>
									<option value='Tutong'>Tutong</option>
									<option value='Gadong'>Gadong</option>
								</Select>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Preferred Staff</FormLabel>
								<Select
									id='pref_staff'
									name='staff'
									placeholder='Select option'
									onChange={handleInputChange}>
									<option value='Catherine'>Catherine</option>
									<option value='Kate'>Kate</option>
									<option value='Jessica'>Jessica</option>
									<option value='Amanda'>Amanda</option>
									<option value='Patricia'>Patricia</option>
									<option value='Mandy'>Mandy</option>
									<option value='Jane'>Jane</option>
									<option value='Claire'>Claire</option>
									<option value='Naomi'>Naomi</option>
									<option value='Olivia'>Olivia</option>
									<option value='Catriona'>Catriona</option>
								</Select>
							</FormControl>
							{error === true ? (
								<Box mt='5'>
									<Flex color='red'>Error: </Flex>
									<Flex>Missing value required. Please check form.</Flex>
								</Box>
							) : (
								''
							)}
							<Button
								mt='3vh'
								mb='2vh'
								type='submit'
								width='100%'
								_focus={{ outline: 'none' }}
								_active={{ outline: 'none' }}>
								Set me up!
							</Button>
							<Button
								type='submit'
								width='100%'
								_focus={{ outline: 'none' }}
								_active={{ outline: 'none' }}
								onClick={() => navigate(`/dashboard`)}>
								Back to Dashboard
							</Button>
						</form>
					</Flex>
				</Flex>
			)}
		</Flex>
	);
};

export default Appointments;
