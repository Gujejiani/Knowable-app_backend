import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
    .setTitle('Courses API')
    .setDescription('Knowable api endpoints')
    .setVersion('1.0')
    .addTag('knowable')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  // TODO
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
