import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from "./clients.controller";
//import { MongooseModule } from "@nestjs/mongoose";
import { ClientsService } from "./clients.service";
//import { ProductSchema } from "./product.model";
import { Client } from './client.model';


@Module({
 imports:[TypeOrmModule.forFeature([Client])],
 controllers:[ClientsController],
 providers : [ClientsService],
 exports: [ClientsModule]
})
export class ClientsModule{}