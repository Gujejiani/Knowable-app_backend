import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CoursesModule,

    ConfigModule.forRoot({
      isGlobal: true, // This makes ConfigService globally available
      envFilePath: '.env', // You can specify the path to your .env file
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
