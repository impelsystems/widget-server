import { gql } from "graphql-tag";

export const doodadsSchema = gql`
  type Doodad {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    created: String!
    modfied: String!
  }

  extend type Query {
    doodads: Doodads!
  }

  input DoodadFilterInput {
    keywords: String
    minPrice: Float
    max_Price: Float
  }

  type Doodads {
    list(filter: DoodadFilterInput): [Doodad!]
    count(filter: DoodadFilterInput): Doodad!
  }

  input DoodadCreateInput {
    name: String!
    description: String!
    price: Float!
    image: String!
  }

  extend type Mutation {
    createDoodad(input: DoodadCreateInput!): Doodad!
    doodad(id: ID!): DoodadMutation!
  }

  input DoodadUpdateInput {
    name: String
    description: String
  }

  type DoodadMutation {
    update(input: DoodadUpdateInput!): Doodad!
    setPrice(price: Float!): Doodad!
    setImage(image: String!): Doodad!
    delete: Void!
  }
`;
