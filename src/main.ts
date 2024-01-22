import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { reset } from './global/utils/console/colors';
import { cyan } from './global/utils/console/colors';

async function start() {
  const logger = new Logger('NestBootstrap');
  const PORT = process.env.PORT || 5000;
  const APP_HOST_FULL = `http://localhost:${PORT}`;

  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  
  await app.listen(PORT, () => {
    logger.log(`🚀 Server started on ${cyan}${APP_HOST_FULL}${reset}`);
  });
}
start();
