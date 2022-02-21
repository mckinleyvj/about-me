const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Customer {
    _id: ID
    firstname: String
    lastname: String
    address: String
    contact_no: String
    email: String
    password: String
    isEnabled: Boolean
  }

  type Service {
    _id: ID
    serv_title: String
    serv_desc: String
    serv_image: String
  }

  type Auth {
    token: ID!
    customer: Customer
  }

  type Query {
    customer: [Customer]
    service: [Service]
  }

  type Mutation {
    signup(
      firstname: String!
      lastname: String!
      address: String!
      contact_no: String!
      email: String!
      password: String!
    ): Auth
  }


`;

module.exports = typeDefs;
