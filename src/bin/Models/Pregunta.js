const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PreguntaSchema = new Schema({
  pregunta: String,
  id_respuesta: {
    type: Schema.Types.ObjectId,
    ref: "Respuesta"
  }
});

var Pregunta = mongoose.model('Pregunta', PreguntaSchema);

module.exports = Pregunta;