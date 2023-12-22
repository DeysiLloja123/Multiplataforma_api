const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Alumnos',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Database is connected'));


const alumnoSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  carrera: String,
  telefono: Number
  });

const Alumno = mongoose.model('Alumno', alumnoSchema);
  module.exports = {
    mongoose,
    Alumno,
  };