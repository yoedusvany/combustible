import { gql } from 'apollo-server';

export default gql`
    # Vehiculo Type.
    type Vehiculo {
        id:             String
        chapa:          String
        indiceConsumo:  Int
        responsable:    String!
        tipoV:          String!
    }

    extend type Query {
        getVehiculos: [Vehiculo],
        getVehiculo(
            id : String
        ): Vehiculo
    }
    input InputVehiculo {
        indiceConsumo : Int
        chapa: String
        tipov: String
        responsable: String
    }

    extend type Mutation {
        addVehiculo(
            input : InputVehiculo
        ):Vehiculo,

        updateVehiculo(
            id      : String!
            input   : InputVehiculo
        ):Vehiculo,
        
        deleteVehiculo(
            id      : String!
        ):Vehiculo
    }
`;