import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InitialApp } from './config/initial-app';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Habilita la carpeta "uploads" como pública
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // Configuración de tu app
  await InitialApp(app);
}
bootstrap();
