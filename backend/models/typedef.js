const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Enrollment {
    id: ID!
    name: String!
    email: String!
    phone: String!
    message: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    enrollments: [Enrollment]
  }

  type Mutation {
    addEnrollment(name: String!, email: String!, phone: String!, message: String!): Enrollment!
  }
`;

module.exports = typeDefs;
