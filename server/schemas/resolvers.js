const { AuthenticationError } = require('apollo-server-express');
const { Seeker } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    seekers: async () => {
      return Seeker.find();
    },

    seeker: async (root, { seekerId }) => {
      return Seeker.findOne({ _id: seekerId });
    },

    me: async (root, args, ctx) => {
      if (ctx.user) {
        return Seeker.findOne({ _id: ctx.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addSeeker: async (root, { firstname, lastname, email, password }) => {
      const Seeker = await Seeker.create({ firstname, lastname, email, password });
      const token = signToken(Seeker);

      return { token, Seeker };
    },
    login: async (root, { email, password }) => {
      const Seeker = await Seeker.findOne({ email });

      if (!Seeker) {
        throw new AuthenticationError('No Seeker with this email found!');
      }

      const correctPw = await Seeker.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(Seeker);
      return { token, Seeker };
    },

    // addSkill: async (root, { SeekerId, skill }, ctx) => {
    //   if (ctx.user) {
    //     return Seeker.findOneAndUpdate(
    //       { _id: SeekerId },
    //       {
    //         $addToSet: { skills: skill },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
      // throw new AuthenticationError('You need to be logged in!');
    // },
    removeSeeker: async (root, args, ctx) => {
      if (ctx.user) {
        return Seeker.findOneAndDelete({ _id: ctx.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // removeSkill: async (root, { skill }, ctx) => {
    //   if (ctx.user) {
    //     return Seeker.findOneAndUpdate(
    //       { _id: ctx.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
      // throw new AuthenticationError('You need to be logged in!');
    // },
  },
};

module.exports = resolvers;
