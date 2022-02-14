import { gql } from '@apollo/client';

export const QUERY_SEEKERS = gql`
  query allSeekers {
    seekers {
      _id
      firstname
      lastname
      isEnabled
    }
  }
`;
