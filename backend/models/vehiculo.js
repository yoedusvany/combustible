import mongoose, { Mongoose } from "mongoose";

const Schema = mongoose.Schema;

const vehiculoSchema = new Schema({
  chapa: {
    type: String,
    required: true
  },
  indiceConsumo: {
    type: String,
    required: true
  },
  tipoV : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoV'
  },
  responsable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{collection: 'vehiculo'});

var vehiculoModel = mongoose.model(
  'vehiculo', 
  vehiculoSchema
);

export default vehiculoModel;