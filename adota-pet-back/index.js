import express from 'express';
import ongsRouter from './routes/ong.route.js';
import gestoresRouter from './routes/gestor.route.js';
import petsRouter from './routes/pet.route.js';
import tutoresRouter from './routes/tutor.route.js';
import deletelogRouter from './routes/detete_log.route.js';
import formularioRouter from './routes/formulario.route.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/ong', ongsRouter);
app.use('/gestor', gestoresRouter);
app.use('/pet', petsRouter);
app.use('/tutor', tutoresRouter);
app.use('/deletelog', deletelogRouter);
app.use('/formulario', formularioRouter);
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3001, () => console.log('API Started!!'));
