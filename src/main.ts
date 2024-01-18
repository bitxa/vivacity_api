import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './config/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // Initialize the data source
  await AppDataSource.initialize()
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
      process.exit(1);
    });

  // Run migrations
  await AppDataSource.runMigrations()
    .then(() => console.log('Migrations executed'))
    .catch((err) => {
      console.error('Error during migrations execution:', err);
      process.exit(1);
    });

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
