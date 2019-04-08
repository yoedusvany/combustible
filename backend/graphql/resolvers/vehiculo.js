import vehiculoModel from '../../models/vehiculo';

export default {
    Query:{
        getVehiculos: async ()=>{
            return await  vehiculoModel.find({});
        },

        getVehiculo: async (parent, args) => {
            return await vehiculoModel.findById(args.id);
        }
    },
    Mutation: {
        addVehiculo: async (parent, args) => {
            let vehiculo = new vehiculoModel(args.input);
            return await vehiculo.save();
        },
        
        updateVehiculo: async (parent, args) => {
            return await vehiculoModel.findByIdAndUpdate(args.id, args.input, {new: true});
        },
        
        deleteVehiculo: async (parent, args) => {
            return await vehiculoModel.findByIdAndDelete(args.id);
        }
    }
}
