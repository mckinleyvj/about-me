const { AuthenticationError } = require('apollo-server-express');
const { Customer, Service } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    customer: async (root, args, context) => {  
      if (context.customer) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    service: async () => {
      return await Service.find({});
    }
  },

  Mutation: {
    signup: async (root, { firstname, lastname, address, contact_no, email, password }) => {
      try {
        const customer = await Customer.create({ firstname, lastname, address, contact_no, email, password });
        const token = signToken(customer);
        return { token, customer };
      } catch (e) {
        console.error(e);
      }
    },
    login: async (root, { email, password }) => {
      const customer = await Customer.findOne({ email });

      if (!customer) {
        throw new AuthenticationError("No customer found with this email address");
      }

      const correctPw = await customer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(customer);

      return { token, customer };
    },
  },
};

module.exports = resolvers;
