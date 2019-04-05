import { gql } from 'apollo-server';

export default gql`
    # Vehiculo Type.
    type Vehiculo {
        id:             String
        chapa:          String
        responsable:    User
        tipoV:          TipoV
    }

    extend type Query {
        getVehiculos: [Vehiculo],
        getVehiculo(
            id : String
        ): Vehiculo
    }

    extend type Mutation {
        addVehiculo(
            chapa       : String
            tipoV       : TipoV
            responsable : User
        ):Vehiculo,

        updateVehiculo(
            id          : String
            chapa       : String
            tipoV       : TipoV
            responsable : User
        ):Vehiculo,
        
        deleteVehiculo(
            id      : String
        ):Vehiculo
    }
`;