const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql")

export const UserType = new GraphQLObjectType({
    name:"User",
    fields: () => (
        {
            id: { type: GraphQLID },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        }
    )  
})