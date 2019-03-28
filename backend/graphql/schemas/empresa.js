import { gql } from 'apollo-server';

export default gql`
    # Empresa Type.
    type Empresa {
        id:     String
        nombre: String
    }

    type Query {
        getEmpresas: [Empresa],
        getEmpresa(
            id : String
        ): Empresa
    }

    type Mutation {
        addEmpresa(
            nombre     : String
        ):Empresa,

        updateEmpresa(
            id      : String,
            nombre  : String
        ):Empresa,
        
        deleteEmpresa(
            id      : String
        ):Empresa
    }
`;