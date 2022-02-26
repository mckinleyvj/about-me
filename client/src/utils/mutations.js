import { gql } from '@apollo/client';

export const SIGNUP = gql`
	mutation signup(
		$firstnameVal: String!
		$lastnameVal: String!
		$addressVal: String!
		$contact_noVal: String!
		$emailVal: String!
		$passwordVal: String!
	) {
		signup(
			firstname: $firstnameVal
			lastname: $lastnameVal
			address: $addressVal
			contact_no: $contact_noVal
			email: $emailVal
			password: $passwordVal
		) {
			token
			customer {
				_id
				email
				firstname
				lastname
			}
		}
	}
`;

export const ADD_APPOINTMENT = gql`
	mutation addAppointment(
		$service_type: String!
		$customer: String!
		$datetime: String!
		$branch: String!
		$staff: String!
	) {
		addAppointment(
			service_type: $service_type
			customer: $customer
			datetime: $datetime
			branch: $branch
			staff: $staff
		) {
			_id
			service_type
			customer
			datetime
			branch
			staff
		}
	}
`;

export const CANCEL_APPOINTMENT = gql`
	mutation cancelAppointment($apptId: ID!) {
		cancelAppointment(apptId: $apptId) {
			_id
			service_type
			customer
			datetime
			branch
			staff
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($emailVal: String!, $passwordVal: String!) {
		login(email: $emailVal, password: $passwordVal) {
			token
			customer {
				_id
				email
				firstname
				lastname
			}
		}
	}
`;
