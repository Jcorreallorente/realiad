const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const { controller } = require('./Controller')

app.get("/", (req, res) => {
  res.send("Inicio")
})

// Categorias
app.get("/categorias", (req, res) => {
  controller.getCategorias(res);
})
app.get("/categorias/:nombre_animal", (req, res) => {
  let nombre = req.params.nombre_animal;
  controller.getCategoria(res, nombre);
})
app.post("/categorias", (req, res) => {
  let cat = req.body.cat;
  controller.setCategoria(res, cat);
})
app.delete("/categorias/:id", (req, res) => {
  let id = req.params.id;
  controller.delCategoria(res, id);
})

// Temas
app.get("/temas", (req, res) => {
  controller.getTemas(res);
})
app.get("/temas/:descipcion", (req, res) => {
  let desc = req.params.descripcion;
  controller.getTema(res, desc);
})
app.post("/temas", (req, res) => {
  let tema = req.body.tema;
  controller.setTema(res, tema);
})
app.delete("/temas/:id", (req, res) => {
  let id = req.params.id;
  controller.delTema(res, id);
})

// Preguntas
app.get("/preguntas", (req, res) => {
  controller.getPreguntas(res);
})
app.get("/preguntas/:id", (req, res) => {
  let id = req.params.id;
  controller.getPregunta(res, id);
})
app.post("/preguntas", (req, res) => {
  let preg = req.body.preg;
  controller.setPregunta(res, preg);
})
app.post("/preguntas/:id/respuesta", (req, res) => {
  let id = req.params.id;
  let preg = req.body.preg;
  controller.setPreguntaRes(res, preg, id);
})
app.delete("/preguntas/:id", (req, res) => {
  let id = req.params.id;
  controller.delPregunta(res, id);
})

// Respuestas
app.get("/respuestas", (req, res) => {
  controller.getRes(res);
})

// Repositorios
  app.get("/repositorios", (req, res) => {
    controller.getRepositorios(res);
  })
  app.get("/repositorios/:id", (req, res) => {
    let id = req.params.id;
    controller.getRepositorio(res, id);
  })
  app.post("/repositorios", (req, res) => {
    let repo = req.body.repo;
    controller.setRepositorio(res, repo);
  })

exports.app = app;