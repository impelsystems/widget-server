import { gql } from "graphql-tag";

export const rootSchema = gql`
  scalar Date
  scalar Void

  type Query {
    at: Date!
  }
  type Mutation {
    at: Date!
  }
  type Subscription {
    at: Date!
  }
`;
