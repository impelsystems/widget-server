import { gql } from "graphql-tag";

export const widgetsSchema = gql`
  type Widget {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String
    createdAt: String!
    updatedAt: String!
    doodads: [Doodad!]!
  }

  extend type Query {
    widgets: [Widget!]!
    widget(id: ID!): Widget!
  }

  extend type Mutation {
    createWidget(
      name: String!
      description: String!
      price: Float!
      image: String
    ): Widget!
    updateWidget(
      id: ID!
      name: String
      description: String
      price: Float
      image: String
    ): Widget!
    deleteWidget(id: ID!): Widget!
  }
`;
