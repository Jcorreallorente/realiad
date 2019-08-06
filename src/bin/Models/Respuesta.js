const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RespuestaSchema = new Schema({
  respuesta: String
});

var Respuesta = mongoose.model('Respuesta', RespuestaSchema);

module.exports = Respuesta;