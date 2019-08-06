const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RepositorioSchema = new Schema({
  name: String,
  nombre_archivo: String
});

var Repositorio = mongoose.model('Repositorio', RepositorioSchema);

module.exports = Repositorio;