const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Seeker {
    _id: ID
    firstname: String
    lastname: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    seeker: Seeker
  }

  type Query {
    seekers: [Seeker]!
    seeker(seekerId: ID!): Seeker
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Seeker
  }

  type Mutation {
    addSeeker(firstname: String!, lastname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    // addSkill(profileId: ID!, skill: String!): Profile
    removeSeeker: Seeker
    // removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
