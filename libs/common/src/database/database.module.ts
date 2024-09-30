import { Module } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';


@Module({
    imports: [

        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.getOrThrow('HOST'), // default PostgreSQL host
                port: configService.getOrThrow('MYSQL_PORT'), // default PostgreSQL port
                database: configService.getOrThrow('DATABASE'), // default PostgreSQL database
                username: configService.getOrThrow('MYSQL_DATABASE'), // default PostgreSQL user
                password: configService.getOrThrow('MYSQL_ROOT_PASSWORD'), // password set in Docker
                autoLoadEntities: true,
                synchronize:  configService.getOrThrow('MYSQL_SYNCHRONIZE') === 'true',

           }),
           inject: [ConfigService],
   
       })

    ],
    providers: [],
    exports: []
})


export class DatabaseModule {

    static forFeature(entities: EntityClassOrSchema[]){
        return TypeOrmModule.forFeature(entities)

    }
}