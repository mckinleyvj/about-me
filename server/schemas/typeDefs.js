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

  type Appointments {
    _id: ID
    service_type: String
    customer: String
    datetime: String
    approved: Boolean
    branch: String
    staff: String
  }

  type Auth {
    token: ID!
    customer: Customer
  }

  type Query {
    customer(customerId: ID!): Customer
    appointments(customer: String!): [Appointments]
    service: [Service]
  }

  type Mutation {
    login(
      email: String!
      password: String!
      ): Auth
    signup(
      firstname: String!
      lastname: String!
      address: String!
      contact_no: String!
      email: String!
      password: String!
    ): Auth
    addAppointment(
      service_type: String!
      customer: String!
      datetime: String!
      branch: String!
      staff: String!
    ): Appointments
  }
`;

module.exports = typeDefs;
