import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tipovSchema = new Schema({
  tipo: {
    type: String,
    required: true
  }
},{collection: 'tipov'});

var tipovModel = mongoose.model(
  'tipov', 
  tipovSchema
);

export default tipovModel;