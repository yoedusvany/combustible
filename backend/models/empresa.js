import mongoose from "mongoose";

const Schema = mongoose.Schema;

const empresaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  }
},{collection: 'empresa'});

var empresaModel = mongoose.model(
  'empresa', 
  empresaSchema
);

export default empresaModel;