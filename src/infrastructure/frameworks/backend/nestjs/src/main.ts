import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeDB } from '../../../../database/config/database.config';

async function bootstrap() {
  try{
    await initializeDB();
    const app = await NestFactory.create(AppModule);
    await app.listen(8000);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}
bootstrap();