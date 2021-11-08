import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['localhost:3000'],
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
