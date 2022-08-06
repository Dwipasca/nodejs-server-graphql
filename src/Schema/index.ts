const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { GET_ALL_USERS, GET_USER_BY_ID } = require("./Queries/User");
const {
  CREATE_USER,
  DELETE_USER,
  UPDATE_PASSWORD,
} = require("./Mutations/User");

const RootQuesry = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUserById: GET_USER_BY_ID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuesry,
  mutation: Mutation,
});
