const { AuthenticationError } = require('apollo-server-express');
const { Customer, Service, Appointments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		customer: async (parent, { customerId }) => {
			return Customer.findOne({ _id: customerId });
		},
		service: async () => {
			return await Service.find({});
		},
		appointments: async (parent, { customer }) => {
			return await Appointments.find({ customer: customer });
		},
	},

	Mutation: {
		signup: async (root, { firstname, lastname, address, contact_no, email, password }) => {
			try {
				const customer = await Customer.create({
					firstname,
					lastname,
					address,
					contact_no,
					email,
					password,
				});
				const token = signToken(customer);
				return { token, customer };
			} catch (e) {
				console.error(e);
			}
		},
		login: async (root, { email, password }) => {
			const customer = await Customer.findOne({ email });

			if (!customer) {
				throw new AuthenticationError('No customer found with this email address');
			}

			const correctPw = await customer.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(customer);

			return { token, customer };
		},
		addAppointment: async (
			root,
			{ service_type, customer, datetime, branch, staff, approved }
		) => {
			try {
				const newAppointment = await Appointments.create({
					service_type,
					customer,
					datetime,
					branch,
					staff,
					approved,
				});
				return { newAppointment };
			} catch (e) {
				console.error(e);
			}
		},
		cancelAppointment: async (root, { apptId }, context) => {
			if (context.user) {
				const deletedAppointment = await Appointments.findOneAndDelete({
					_id: apptId,
				});
				return deletedAppointment;
			}
			throw new AuthenticationError('You need to be logged in!');
		},
	},
};

module.exports = resolvers;
