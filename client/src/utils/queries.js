import { gql } from '@apollo/client';

export const GET_CUSTOMERINFO = gql`
query oneCustomer($customerId: ID!) {
    customer(customerId: $customerId) {
      _id
      firstname
      lastname
      address
      contact_no
      email
      password
      isEnabled
    }
  }
`;

export const GET_SERVICES = gql`
  query allService {
    service {
      _id
      serv_title
      serv_desc
      serv_image
    }
  }
`;
