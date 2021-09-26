import { gql } from '@apollo/client';

export const ALL_CONTINENTS_QUERY = gql`
  query continents($filter: ContinentFilterInput){
    continents(filter: $filter) {
      code
      name
      countries {
        name
      }
    }
  }
`;

export const CONTINENT_QUERY = gql`
  query Continent($code: ID!){
    continent(code: $code) {
      code
      name
      countries {
        name
      }
    }
  }
`;