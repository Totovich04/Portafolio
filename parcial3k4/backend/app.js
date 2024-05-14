const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
// Configura la aplicación Express
const app = express();
app.use(express.json());
app.use(cors());

// Configura la conexión Sequelize (base de datos SQLite en memoria)
const sequelize = new Sequelize('sqlite::memory:');

// Define el modelo Evento
const Evento = sequelize.define('Evento', {
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    fechaInicio: DataTypes.STRING,
    fechaFin: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    enlace: DataTypes.STRING,
    tipoAsistencia: DataTypes.STRING
}, { timestamps: false });

// Inicializa la base de datos e inserta datos de muestra
async function inicializarBaseDeDatos() {
    await sequelize.sync({ force: true });
    await Evento.bulkCreate([
        { nombre: 'CES 2024', ubicacion: 'Las Vegas, NV, USA', fechaInicio: '2024-01-07', fechaFin: '2024-01-10', descripcion: 'Feria de electrónica de consumo.', enlace: 'https://www.ces.tech', tipoAsistencia: 'Presencial' },
        { nombre: 'Campus Party Argentina', ubicacion: 'Buenos Aires, Argentina', fechaInicio: '2024-04-01', fechaFin: '2024-04-03', descripcion: 'Festival de tecnología, creatividad, ciencia y ocio digital.', enlace: 'https://argentina.campus-party.org', tipoAsistencia: 'Presencial' },
        { nombre: 'Microsoft Build', ubicacion: 'Seattle, WA, USA', fechaInicio: '2024-05-19', fechaFin: '2024-05-21', descripcion: 'Conferencia anual de desarrolladores de Microsoft para discutir nuevas tecnologías en Azure y otros productos.', enlace: 'https://mybuild.microsoft.com', tipoAsistencia: 'Presencial/Virtual' },
        { nombre: 'Teknofest Buenos Aires', ubicacion: 'Buenos Aires, Argentina', fechaInicio: '2024-09-18', fechaFin: '2024-09-21', descripcion: 'Festival de tecnología e innovación con enfoque en competencias de ingeniería.', enlace: 'https://www.teknofest.org', tipoAsistencia: 'Presencial' },
        { nombre: 'Argentina Game Show', ubicacion: 'Buenos Aires, Argentina', fechaInicio: '2024-10-10', fechaFin: '2024-10-12', descripcion: 'El evento de videojuegos y tecnología más grande de Argentina.', enlace: 'https://www.argentinagameshow.com', tipoAsistencia: 'Presencial' },
        { nombre: 'Google Cloud Next', ubicacion: 'San Francisco, CA, USA', fechaInicio: '2024-10-12', fechaFin: '2024-10-14', descripcion: 'Evento de Google para mostrar las últimas innovaciones en la nube.', enlace: 'https://cloud.withgoogle.com/next', tipoAsistencia: 'Presencial/Virtual' },
        { nombre: 'Web Summit', ubicacion: 'Lisboa, Portugal', fechaInicio: '2024-11-04', fechaFin: '2024-11-07', descripcion: 'Una de las mayores conferencias de tecnología del mundo.', enlace: 'https://websummit.com', tipoAsistencia: 'Presencial/Virtual' },
        { nombre: 'AWS re:Invent', ubicacion: 'Las Vegas, NV, USA', fechaInicio: '2024-11-26', fechaFin: '2024-11-30', descripcion: 'Evento anual de AWS que cubre todos los aspectos de la nube de Amazon, incluyendo AWS Cloud, Machine Learning, y más.', enlace: 'https://reinvent.awsevents.com', tipoAsistencia: 'Presencial' } 
    ]);
}

app.get('/eventos/:nombre', async (req, res)=> {
    try {
        const nombre = req.params.nombre;
        const evento = await Evento.findOne({ where: { nombre: {
            [Sequelize.Op.like]: `%${nombre}%` } } });
        ;
        if (evento) {
            res.json(evento);
        } else {
            res.status(404).send('Evento no encontrado');
        }
    } catch (error) {
        res.status(500).send('Error al obtener el evento');
    }
})
//Definir aqui la ruta con el método GET para obtener todos los eventos
app.get('/eventos', async (req, res) => {
    try {
    const eventos = await Evento.findAll();
    res.json(eventos);}
    catch (error) {
        res.status(500).send("Error al obtener los eventos");
    }
});

app.delete('/eventos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Evento.destroy({ where: { id } });
        res.send('Evento eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el evento');
    }
});
app.post('/eventos', async (req, res) => {
    try {
        const evento = req.body;
        await Evento.create(evento);
        res.send('Evento creado');
    } catch (error) {
        res.status(500).send('Error al crear el evento');
    }
});

app.get('/', (req, res) => {
    res.send('¡La API está funcionando!');
});
// Inicia el servidor
inicializarBaseDeDatos().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});
