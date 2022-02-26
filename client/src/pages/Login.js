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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
	const navigate = useNavigate();
	const isLoggedIn = Auth.loggedIn();

	if (isLoggedIn) {
		navigate('/dashboard');
	}

	const [userFormInput, setUserFormInput] = useState({ emailVal: '', passwordVal: '' });
	const [login] = useMutation(LOGIN_USER);
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		setError(false);
		const { name, value } = e.target;
		setUserFormInput({ ...userFormInput, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { data } = await login({ variables: { ...userFormInput } });
			Auth.login(data.login.token);
			navigate('/dashboard');
		} catch (err) {
			setError(true);
			console.error(err);
		}

		setUserFormInput({
			emailVal: '',
			passwordVal: '',
		});
	};

	return (
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
					<Button color='#555555' variant='link' onClick={() => navigate(`/signup`)}>
						<Text>Don't have an account? </Text>
						<Text ml='0.3vw' color='brand.300' fontWeight='500'>
							Sign up
						</Text>
					</Button>
				</HStack>
				<Flex w='30vw' alignSelf='center' flexDirection='column' justifyContent='center'>
					<Text align='left' fontSize='2rem'>
						Login to my account
					</Text>
					<Text align='left' color='brand.500' fontSize='0.8rem'>
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					</Text>
					<form id='login' onSubmit={handleSubmit}>
						<FormControl mt='2vh' isRequired>
							<FormLabel>Username/Email</FormLabel>
							<Input
								id='email'
								name='emailVal'
								type='text'
								placeholder='Enter your username/email'
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
								<Flex>
									Could not log you in. Please check username and password.
								</Flex>
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
							Login to my account
						</Button>
						<Button
							width='100%'
							_focus={{ outline: 'none' }}
							_active={{ outline: 'none' }}
							onClick={() => navigate(`/`)}>
							Back to Home Page
						</Button>
					</form>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Login;
