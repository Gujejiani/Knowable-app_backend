import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './modules/courses/courses.module';
import { ConfigModule } from '@nestjs/config';
import { SectionsModule } from './modules/sections/sections.module';
import { DatabaseModule } from 'common/common/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { LoggingMiddleware } from './middlewares/logging.middleware';
import { EventEmitterModule } from '@nestjs/event-emitter';
@Module({
  imports: [
    CoursesModule,
    SectionsModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // Enables GraphQL Playground at /graphql
    }),
    ConfigModule.forRoot({
      isGlobal: true, // This makes ConfigService globally available
      envFilePath: '.env', // You can specify the path to your .env file
    }),

    EventEmitterModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
