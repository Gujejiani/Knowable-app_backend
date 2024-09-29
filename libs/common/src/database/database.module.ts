import { Module } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'password',
            database: 'postgres',
            entities: [],
            autoLoadEntities: true,

        }),

    ],
    providers: [],
    exports: []
})


export class DatabaseModule {

    static forFeature(entities: EntityClassOrSchema[]){
        return TypeOrmModule.forFeature(entities)

    }
}