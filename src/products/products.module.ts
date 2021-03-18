import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from "./products.controller";
//import { MongooseModule } from "@nestjs/mongoose";
import { ProductsService } from "./products.service";
//import { ProductSchema } from "./product.model";
import { Product } from './product.model';


@Module({
 imports:[TypeOrmModule.forFeature([Product])],
 controllers:[ProductsController],
 providers : [ProductsService],
 exports: [ProductsModule]
})
export class ProductsModule{}