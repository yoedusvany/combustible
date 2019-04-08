import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{collection: 'user'});

var userModel = mongoose.model(
  'user', 
  userSchema
);

export default userModel;