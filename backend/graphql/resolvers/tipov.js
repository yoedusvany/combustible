import tipovModel from '../../models/tipov';

export default {
    Query:{
        getTiposV: async ()=>{
            return await tipovModel.find({});
        },

        getTipoV: async (parent, args) => {
            return await tipovModel.findById(args.id);
        }
    },
    Mutation: {
        addTipoV: async (parent, args) => {
            let tipov = new tipovModel({ tipo: args.tipo });
            return await tipov.save();
        },
        
        updateTipoV: async (parent, args) => {
            return await tipovModel.findByIdAndUpdate(args.id, { tipo: args.tipo }, {new: true});
        },
        
        deleteTipoV: async (parent, args) => {
            return await tipovModel.findByIdAndDelete(args.id);
        }
    }
}
