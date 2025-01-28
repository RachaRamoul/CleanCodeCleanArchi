require('dotenv').config();
import express from 'express';
import cors from 'cors';
import router  from './routes/index';
import initializeDatabase from '../../../../database/config/database.config';


const PORT = 8001;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

initializeDatabase()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server express is running on http://localhost:${PORT}`);
  });
});

export default app;
