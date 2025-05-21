const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // ✅ Keep this at the top

const { ApolloServer, gql } = require('apollo-server-express');
const { StringDecoder } = require('string_decoder');

// If needed: const Enrollment = require('./models/Enrollment');
// If using external DB config: require('./config/database');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Optional dummy routes
app.get('/users', async (req, res) => {
  res.json([{ message: 'This is a placeholder response without DB' }]);
});

app.post('/users', async (req, res) => {
  const { name, email, phone, message } = req.body;
  res.json({ message: `Received data for ${name}, but no DB connected.` });
});

// GraphQL setup (optional)
const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => 'GraphQL is working without DB!',
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📡 GraphQL endpoint at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
