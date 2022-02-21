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
        const user = await Customer.create({ firstname, lastname, address, contact_no, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (e) {
        console.error(e);
      }
    },
  },
};

module.exports = resolvers;
