const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Customer {
    _id: ID
    firstname: String
    lastname: String
    address: String
    contact_no: Int
    email: String
    password: String
    isEnabled: Boolean
  }

  type Auth {
    token: ID!
    customer: Customer
  }

  type Query {
    customer: Customer
  }
`;

module.exports = typeDefs;
