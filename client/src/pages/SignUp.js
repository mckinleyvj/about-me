import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	Text,
	Flex,
	Image,
	Textarea,
	useMediaQuery,
} from '@chakra-ui/react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../utils/mutations';

const SignUp = () => {
	const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');

	const navigate = useNavigate();

	const [userFormInput, setUserFormInput] = useState({
		firstnameVal: '',
		lastnameVal: '',
		addressVal: '',
		contact_noVal: '',
		emailVal: '',
		passwordVal: '',
	});

	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		setError(false);
		const { name, value } = e.target;
		setUserFormInput({ ...userFormInput, [name]: value });
	};

	const [signup] = useMutation(SIGNUP);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await signup({ variables: { ...userFormInput } });
			Auth.login(data.signup.token);
			navigate(`/dashboard`);
		} catch (err) {
			setError(true);
			console.error(err);
		}
	};

	return (
		<>
			{isSmallerThan800 ? (
				<Flex
					overflowX='hidden'
					h='100vh'
					justifyContent='center'
					alignItems='flex-start'
					my='25'>
					<Box w='100%' h='100%' opacity='0.1' pos='fixed' zIndex='-9999'>
						<Image
							h='100vh'
							w='100vw'
							src='https://images.unsplash.com/photo-1644916081706-e98b1fadc319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
						/>
					</Box>
					<Flex flexDirection='column'>
						<HStack mb='3vh' justifyContent='center'>
							<Button
								color='#555555'
								variant='link'
								onClick={() => navigate(`/login`)}>
								<Text>Already have an account? </Text>
								<Text ml='0.3vw' color='brand.300' fontWeight='500'>
									Login here
								</Text>
							</Button>
						</HStack>
						<Flex
							w='80vw'
							alignSelf='center'
							flexDirection='column'
							justifyContent='center'>
							<Text align='left' fontSize='2rem'>
								Create an account
							</Text>
							<Text align='left' color='brand.500' fontSize='0.8rem'>
								To make appointments, create account with a valid email.
							</Text>
							<form id='signup' className='signup' onSubmit={handleFormSubmit}>
								<FormControl mt='2vh' isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										id='firstname'
										name='firstnameVal'
										type='text'
										placeholder='Enter your firstname'
										value={userFormInput.firstnameVal}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Last Name</FormLabel>
									<Input
										id='lastname'
										name='lastnameVal'
										type='text'
										placeholder='Enter your lastname'
										value={userFormInput.lastnameVal}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Address</FormLabel>
									<Textarea
										id='address'
										name='addressVal'
										type='text'
										placeholder='Enter your address'
										value={userFormInput.addressVal}
										onChange={handleInputChange}
										height='100px'
										resize='vertical'
									/>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Contact No</FormLabel>
									<Input
										id='contact_no'
										name='contact_noVal'
										type='number'
										placeholder='Enter your phone number'
										value={userFormInput.contact_noVal}
										onChange={handleInputChange}
									/>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Email</FormLabel>
									<Input
										id='email'
										name='emailVal'
										type='email'
										placeholder='Enter your phone email'
										value={userFormInput.emailVal}
										onChange={handleInputChange}
									/>
								</FormControl>

								<FormControl mt='3vh' isRequired>
									<FormLabel>Password</FormLabel>
									<InputGroup>
										<Input
											id='password'
											name='passwordVal'
											type='password'
											placeholder='Enter your password'
											value={userFormInput.passwordVal}
											onChange={handleInputChange}
										/>
									</InputGroup>
								</FormControl>
								{error === true ? (
									<Box mt='5'>
										<Flex color='red'>Error: </Flex>
										<Flex>Incorrect value on fields. Please check again.</Flex>
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
									Create my account
								</Button>
								<Button
									type='submit'
									width='100%'
									_focus={{ outline: 'none' }}
									_active={{ outline: 'none' }}
									onClick={() => navigate(`/dashboard`)}>
									Back to Home Page
								</Button>
							</form>
						</Flex>
					</Flex>
				</Flex>
			) : (
				<Box overflowX='hidden'>
					<Box w='100%' h='100%' opacity='0.1' pos='fixed' zIndex='-9999'>
						<Image
							h='100vh'
							w='100vw'
							src='https://images.unsplash.com/photo-1644916081706-e98b1fadc319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
						/>
					</Box>
					<Flex flexDirection='column'>
						<HStack mt='3vh' ml='57%'>
							<Button
								color='#555555'
								variant='link'
								onClick={() => navigate(`/login`)}>
								<Text>Already have an account? </Text>
								<Text ml='0.3vw' color='brand.300' fontWeight='500'>
									Login here
								</Text>
							</Button>
						</HStack>
						<Flex
							w='30vw'
							alignSelf='center'
							flexDirection='column'
							justifyContent='center'>
							<Text align='left' fontSize='2rem'>
								Create an account
							</Text>
							<Text align='left' color='brand.500' fontSize='0.8rem'>
								Lorem ipsum. Enter a brief description for your signup page.
							</Text>
							<form id='signup' className='signup' onSubmit={handleFormSubmit}>
								<FormControl mt='2vh' isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										id='firstname'
										name='firstnameVal'
										type='text'
										placeholder='Enter your firstname'
										value={userFormInput.firstnameVal}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Last Name</FormLabel>
									<Input
										id='lastname'
										name='lastnameVal'
										type='text'
										placeholder='Enter your lastname'
										value={userFormInput.lastnameVal}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Address</FormLabel>
									<Textarea
										id='address'
										name='addressVal'
										type='text'
										placeholder='Enter your address'
										value={userFormInput.addressVal}
										onChange={handleInputChange}
										height='100px'
										resize='vertical'
									/>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Contact No</FormLabel>
									<Input
										id='contact_no'
										name='contact_noVal'
										type='number'
										placeholder='Enter your phone number'
										value={userFormInput.contact_noVal}
										onChange={handleInputChange}
									/>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>Email</FormLabel>
									<Input
										id='email'
										name='emailVal'
										type='email'
										placeholder='Enter your phone email'
										value={userFormInput.emailVal}
										onChange={handleInputChange}
									/>
								</FormControl>

								<FormControl mt='3vh' isRequired>
									<FormLabel>Password</FormLabel>
									<InputGroup>
										<Input
											id='password'
											name='passwordVal'
											type='password'
											placeholder='Enter your password'
											value={userFormInput.passwordVal}
											onChange={handleInputChange}
										/>
									</InputGroup>
								</FormControl>
								{error === true ? (
									<Box mt='5'>
										<Flex color='red'>Error: </Flex>
										<Flex>Incorrect value on fields. Please check again.</Flex>
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
									Create my account
								</Button>
								<Button
									type='submit'
									width='100%'
									_focus={{ outline: 'none' }}
									_active={{ outline: 'none' }}
									onClick={() => navigate(`/dashboard`)}>
									Back to Home Page
								</Button>
							</form>
						</Flex>
					</Flex>
				</Box>
			)}
		</>
	);
};

export default SignUp;
