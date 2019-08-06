const mongoose = require('mongoose');
// Modelos
const Categoria = require('./Models/Categoria')
const Pregunta = require('./Models/Pregunta')
const Repositorio = require('./Models/Repositorio')
const Respuesta = require('./Models/Respuesta')
const Tema = require('./Models/Tema')

class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(
        'mongodb+srv://jairo:correa@cluster0-asi2n.mongodb.net/proyecto?retryWrites=true&w=majority', {
          useNewUrlParser: true
        }
      );
      console.log('Conectado a la base de datos')
    } catch (err) {
      console.log(err)
    }
  }
  // ---------------------------------------------------
  getCategorias(res) {
    Categoria.find({}, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  }
  getCategoria(res, nombre) {
    Categoria.find({
      nombre_animal: nombre
    }, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  }
  setCategoria(res, cat) {
    Categoria.create(cat, (err, result) => {
      if (err) throw err;
      res.send({
        msg: 'Categoría Creada',
        raw: result
      });
    })
  }
  delCategoria(res, id) {
    Categoria.deleteOne({
      _id: id
    }, (err) => {
      if (err) throw err;
      res.send('Eliminado');
    })
  }
  // ---------------------------------------------------
  getTemas(res) {
    Tema.find({}, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  }
  getTema(res, desc) {
    Tema.find({
      descripcion: desc
    }, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  }
  setTema(res, tema) {
    Tema.create(tema, (err, result) => {
      if (err) throw err;
      res.send({
        msg: 'Tema Creado',
        raw: result
      });
    })
  }
  delTema(res, id) {
    Tema.deleteOne({
      _id: id
    }, (err) => {
      if (err) throw err;
      res.send('Eliminado');
    })
  }
  // ---------------------------------------------------
  getPreguntas(res) {
    Pregunta.find({}, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  }
  getPregunta(res, id) {
    Pregunta.find({_id: id})
    .populate({
      path: "id_respuesta",
      select: "respuesta"
    })
    .exec(function (err, result) {
      if (err) throw err;
      res.send(result);
    })
  }
  setPregunta(res, preg) {
    Pregunta.create(preg, (err, result) => {
      if (err) throw err;
      res.send({
        msg: 'Pregunta Creada',
        raw: result
      });
    })
  }
  setPreguntaRes (res, resp, id) {
    Respuesta.create(resp, (err, result) => {
      if (err) throw err;
      res.send({
        msg: 'Respuesta Creada',
        raw: result
      });
      Pregunta.updateOne({
        _id: id
      }, {
        $set: {
          id_respuesta: result
        }
      })
      .then(rawResponse => {
        res.send({
          message: "Updated",
          raw: rawResponse
        });
      })
      .catch(err => {
        if (err) throw err;
      });
    })
  }
  delPregunta(res, id) {
    Pregunta.deleteOne({
      _id: id
    }, (err) => {
      if (err) throw err;
      res.send('Eliminado');
    })
  }

  // -------------------------------------------------------------------
  getRes(res) {
    Respuesta.find({}, (err, result) => {
      if (err) throw err;
      res.send(result); 
    })
  }
  
  // -------------------------------------------------------------------
  getRepositorios (res) {
    Repositorio.find({}, (err, result) => {
      if (err) throw err;
      res.send(result); 
    })
  }
  getRepositorio (res, id) {
    Repositorio.find({_id: id}, (err, result) => {
      if (err) throw err;
      res.send(result); 
    })
  }
  setRepositorio(res, repo) {
    Repositorio.create(repo, (err, result) => {
      if (err) throw err;
      res.send({
        msg: 'Repositorio Creado',
        raw: result
      });
    })
  }
}

exports.controller = new Controller()