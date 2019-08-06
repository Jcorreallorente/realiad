const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TemaSchema = new Schema({
  name: String,
  descripcion: String
});

var Tema = mongoose.model('Tema', TemaSchema);

module.exports = Tema;