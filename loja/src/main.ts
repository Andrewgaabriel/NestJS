import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
        transform: true, // transforma os dados em DTO
        whitelist: true, // remove campos que não estão no DTO
        forbidNonWhitelisted: true, // retorna erro se tiver campos não mapeados no DTO
    })
  );
  await app.listen(3000);
}
bootstrap();
