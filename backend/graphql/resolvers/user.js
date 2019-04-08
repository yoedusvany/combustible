import userModel from '../../models/user';

export default {
    Query:{
        getUsers: async ()=>{
            return await  userModel.find({});
        },

        getUser: async (parent, args) => {
            return await userModel.findById(args.id);
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            let user = new userModel(args.input);
            return await user.save();
        },
        
        updateUser: async (parent, args) => {
            return await userModel.findByIdAndUpdate(args.id, args.input, {new: true});
        },
        
        deleteUser: async (parent, args) => {
            return await userModel.findByIdAndDelete(args.id);
        }
    }
}
