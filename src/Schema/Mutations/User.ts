const { UserType } = require("../TypeDefs/User");
const { GraphQLString, GraphQLID } = require("graphql");
const { Users } = require("../../Entities/Users");

export const CREATE_USER = {
  type: UserType,
  args: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { firstName, lastName, email, password } = args;
    await Users.insert({
      firstName,
      lastName,
      email,
      password,
    });
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, oldPassword, newPassword } = args;

    const user = await Users.findOne({ id: id });

    if (!user) {
      throw new Error("The user is not exist");
    }

    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      return await Users.update({ id: id }, { password: newPassword });
    } else {
      throw new Error("The old password is wrong");
    }
  },
};

export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);
    return args;
  },
};
