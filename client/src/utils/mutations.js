import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation signup(
    $firstnameVal: String!
    $lastnameVal: String!
    $addressVal: String!
    $contact_noVal: String!
    $emailVal: String!
    $passwordVal: String!
    ) {
    signup(
      firstname: $firstnameVal
      lastname: $lastnameVal
      address: $addressVal
      contact_no: $contact_noVal
      email: $emailVal
      password: $passwordVal
    ) {
      token
      customer {
        _id
        email
        firstname
        lastname
      }
    }
  }
`;

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login: (email: $email, password: $password) {
//       token
//       customers {
//         _id
//       }
//     }
//   }
// `;
