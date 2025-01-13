import express from 'express';
import cors from 'cors';
import userRoutes  from './routes/user.routes'
import initializeDatabase from '../../../../database/config/database.config';
import motorcycleRoutes from './routes/motorcycle.routes';


const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes); // Pour les utilisateurs
app.use('/motorcycles', motorcycleRoutes); // Pour les motos


initializeDatabase()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server express is running on http://localhost:${PORT}`);
  });
});

export default app;
