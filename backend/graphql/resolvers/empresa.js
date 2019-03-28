import empresaModel from '../../models/empresa';

export default {
    Query:{
        getEmpresas: async ()=>{
            return await  empresaModel.find({});
        },

        getEmpresa: async (parent, args) => {
            return await empresaModel.findById(args.id);
        }
    },
    Mutation: {
        addEmpresa: async (parent, args) => {
            let empresa = new empresaModel({ nombre: args.nombre });
            return await empresa.save();
        },
        
        updateEmpresa: async (parent, args) => {
            return await empresaModel.findByIdAndUpdate(args.id, { nombre: args.nombre }, {new: true});
        },
        
        deleteEmpresa: async (parent, args) => {
            return await empresaModel.findByIdAndDelete(args.id);
        }
    }
}
