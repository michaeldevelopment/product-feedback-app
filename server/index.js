import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const booksList = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    dataAllBooks: () => booksList,
    helloWorld: () => "Hello World!",
    helloJose: () => "Hello José!",
    findBookByTitle: (parent, args) =>
      booksList.find((book) => book.title === args.title),
  },

  Mutation: {
    addBook: (parent, args) => {
      booksList.push({ title: args.title, author: args.author });
      return { title: args.title, author: args.author };
    },
    deleteBooks: () => {
      return (booksList.length = 0);
    },
  },
};

const typeDefs = `#graphql
  type bookType {
    title: String
    author: String
  }
  type Query {
    helloWorld: String
    dataAllBooks: [bookType]!
    helloJose: String
    findBookByTitle(title: String!): bookType
  }
  
  type Mutation {
    addBook(title: String!, author: String!): bookType
    deleteBooks: Boolean
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

// console.log(`server ready at ${url}`);
