import express from 'express';
import cors from 'cors';
import userRoutes  from './routes/user.routes'
import { initializeDB } from '../../../../database/config/database.config';
import motorcycleRoutes from './routes/motorcycle.routes';


const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes); // Pour les utilisateurs
app.use('/motorcycles', motorcycleRoutes); // Pour les motos


initializeDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})

export default app;
