import {
	HStack,
	Text,
	useColorModeValue,
	VStack,
	Flex,
	Badge,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	Button,
	Box,
} from '@chakra-ui/react';
import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { CANCEL_APPOINTMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const Appointments = ({ appointment }) => {
	const [cancelAppointment] = useMutation(CANCEL_APPOINTMENT);

	const handleCancelAppt = async () => {
		const apptId = appointment._id;
		try {
			await cancelAppointment({
				variables: { apptId },
			});
		} catch (error) {}
		window.location.reload();
	};

	return (
		<Flex
			mx='auto'
			bg={useColorModeValue('white', 'gray.800')}
			shadow='lg'
			mb='2vh'
			p={5}
			// cursor='pointer'
			alignItems='center'>
			<Flex
				alignItems='flex-start'
				justifyContent='space-between'
				flexDirection='column'
				width='100%'>
				<Text alignItems='center' textAlign='left' fontWeight='bold' color='neutral.500'>
					Date:{' '}
					<Box as={'span'} fontWeight='normal' color='brand.500'>
						{appointment.datetime}
					</Box>
				</Text>

				<Text color='neutral.500' fontWeight='bold'>
					Branch:{' '}
					<Box as={'span'} fontWeight='normal' color='brand.500'>
						{appointment.branch}
					</Box>
				</Text>

				<Text color='neutral.500' fontWeight='bold'>
					Preferred staff:{' '}
					<Box as={'span'} fontWeight='normal' color='brand.500'>
						{appointment.staff}
					</Box>
				</Text>
				<VStack alignItems='left'>
					<HStack>
						<VStack alignItems='left' textAlign='left' spacing={0}>
							<Text color='neutral.500' fontWeight='bold'>
								Service:{' '}
								<Box as={'span'} fontWeight='normal' color='brand.500'>
									{appointment.service_type}
								</Box>
							</Text>
						</VStack>
					</HStack>
				</VStack>
			</Flex>
			<Text>
				{appointment.approved ? (
					<Badge colorScheme='green' py={3} px={10} borderRadius='30px'>
						Approved
					</Badge>
				) : (
					<Badge colorScheme='red' py={3} px={10} borderRadius='30px'>
						Awaiting approval
					</Badge>
				)}
			</Text>
			<Menu>
				<MenuButton
					as={Button}
					cursor='pointer'
					background='transparent'
					rightIcon={<BiDotsVerticalRounded />}
				/>
				<MenuList>
					<MenuItem onClick={handleCancelAppt}>Cancel Appointment</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default Appointments;
