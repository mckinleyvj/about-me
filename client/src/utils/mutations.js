import { gql } from '@apollo/client';

// export const ADD_SEEKER = gql`
//   mutation addSeeker($firstname: String!, $lastname: String!, $email: String!, $password: String!, $isEnabled: True) {
//     addSeeker(firstname: $firstname, lastname: $lastname, email: $email, password: $password, isEnabled) {
//       token
//       seekers {
//         _id
//         firstname
//         lastname
//         isEnabled
//       }
//     }
//   }
// `;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login: (email: $email, password: $password) {
      token
      customers {
        _id
      }
    }
  }
`;
