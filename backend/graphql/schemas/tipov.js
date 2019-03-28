import { gql } from 'apollo-server';

export default gql`
    # TipoV Type.
    type TipoV {
        id  : String
        tipo: String
    }

    extend type Query {
        getTiposV: [TipoV],
        getTipoV(
            id : String
        ): TipoV
    }

    extend type Mutation {
        addTipoV(
            tipo     : String
        ):TipoV,

        updateTipoV(
            id      : String,
            tipo    : String
        ):TipoV,
        
        deleteTipoV(
            id      : String
        ):TipoV
    }
`;