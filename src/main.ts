import app from './infrastructure/frameworks/express/express-framework';

async function bootstrap() {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

bootstrap();
