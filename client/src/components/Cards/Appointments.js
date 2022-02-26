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
			cursor='pointer'
			alignItems='center'>
			<Flex
				alignItems='center'
				justifyContent='space-between'
				flexDirection='column'
				width='100%'>
				<Text alignItems='center' textAlign='left' fontWeight='bold' color='neutral.500'>
					{appointment.datetime}
				</Text>

				<Text color='neutral.500' fontWeight='bold'>
					{appointment.branch}
				</Text>

				<Text color='neutral.500' fontWeight='bold'>
					{appointment.staff}
				</Text>
				<VStack alignItems='left'>
					<HStack>
						<VStack alignItems='left' textAlign='left' spacing={0}>
							<Badge colorScheme='green' py={3} px={10} borderRadius='30px'>
								{appointment.service_type}
							</Badge>
						</VStack>
					</HStack>
				</VStack>
			</Flex>
			<Menu>
				<MenuButton
					as={Button}
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
