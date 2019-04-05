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

    extend type Mutation {
        addUser(
            nombre:     String
            usuario:    String
            password:   String
        ):User,

        updateUser(
            id    :     String,
            nombre:     String
            usuario:    String
            password:   String
        ):User,
        
        deleteUser(
            id      : String
        ):User
    }
`;