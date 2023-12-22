const express = require('express');
const app = express();
const { mongoose, Alumno } = require('./database'); // Asegúrate de incluir el modelo Alumno
const PORT = 3000;

app.use(express.json());

// Rutas para Alumno
app.get('/alumnos', async (req, res) => {
    try {
        const alumnos = await Alumno.find({});
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos', error: error.message });
    }
});

app.get('/alumnosOrdenNombre', async (req, res) => {
    try {
        const alumnos = await Alumno.find({}).sort({ nombre: 1 }); // Orden ascendente por nombre
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los alumnos', error: error.message });
    }
});

app.post('/alumnos', async (req, res) => {
    try {
        const nuevoAlumno = new Alumno(req.body);
        const alumnoGuardado = await nuevoAlumno.save();
        res.status(201).json(alumnoGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el alumno', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
