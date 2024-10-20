import app from './infrastructure/frameworks/express/express.server';
import { AppDataSource } from '../src/infrastructure/config/database.config';

async function bootstrap() {
  try {
    // Initialiser la source de données
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    const port = 8000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
    process.exit(1);
  }
}

bootstrap();
