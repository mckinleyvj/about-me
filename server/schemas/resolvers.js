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
};

module.exports = resolvers;
