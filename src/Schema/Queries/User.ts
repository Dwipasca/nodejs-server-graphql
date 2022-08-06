const { GraphQLList, GraphQLID } = require("graphql");

const { UserType } = require("../TypeDefs/User");

const { Users } = require("../../Entities/Users");

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): Promise<IUser[]> {
    return Users.find();
  },
};

export const GET_USER_BY_ID = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(paret: any, args: any) {
    const { id } = args;
    return Users.findOne(id);
  },
};
