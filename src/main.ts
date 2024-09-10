import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import CORSPassThrough from 'src/utils/corse.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CORSPassThrough);
  const config = new DocumentBuilder()
    .setTitle('Полезные мелочи')
    .setDescription('Организация поиска мелочей')
    .setVersion('1.0')
    .addTag('goods')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
