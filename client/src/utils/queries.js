import { gql } from '@apollo/client';

export const QUERY_CUSTOMERS = gql`
  query allCustomers {
    customer {
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
