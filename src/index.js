const fs = require("fs");
const path = require("path");

const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    getAllUsers: async (parent, args, context) => {
      return context.prisma.user.findMany();
    },
  },

  Mutation: {
    createUser: (parent, args, context, info) => {
      const newUser = context.prisma.user.create({
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        },
      });

      return newUser;
    },
  },

  User: {
    id: (parent) => parent.id,
    firstName: (parent) => parent.firstName,
    lastName: (parent) => parent.lastName,
    email: (parent) => parent.email,
    password: (parent) => parent.password,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: {
    prisma,
  },
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`running at port ${PORT}`);
});
