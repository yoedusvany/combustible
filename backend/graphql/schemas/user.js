import { gql } from 'apollo-server';

export default gql`
    # User Type.
    type User {
        id:         String
        nombre:     String
        usuario:    String
        password:   String
    }

    extend type Query {
        getUsers: [User],
        getUser(
            id : String
        ): User
    }

    input UserInput {
        nombre  : String
        user    : String
        password: String
    }

    extend type Mutation {
        addUser(input : UserInput):User,

        updateUser(
            id      : String!,
            input   : UserInput
        ):User,
        
        deleteUser(
            id      : String!
        ):User
    }
`;