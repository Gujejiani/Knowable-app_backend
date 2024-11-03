import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './exception-filters/http.exception.filter';

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

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Removes properties that do not have decorators in DTOs
    forbidNonWhitelisted: true, // Throws error if a non-whitelisted property is provided
    transform: true, // Automatically transforms payloads to be instances of DTO classes
  
    // todo
    disableErrorMessages: false, // Disables the default error messages
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  // TODO
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
