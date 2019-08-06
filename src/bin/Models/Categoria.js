const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
  name: String,
  nombre_animal: String,
  reproduccion: String,
  clasificacion: String
});

var Categoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = Categoria;