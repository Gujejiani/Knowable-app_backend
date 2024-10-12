import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ConfigModule } from '@nestjs/config';
import { SectionsModule } from './sections/sections.module';
import { DatabaseModule } from 'common/common/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
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

   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
