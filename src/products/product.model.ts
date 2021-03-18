import { Entity, Column, PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
import { Client } from 'src/clients/client.model';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  qty: string;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(() => Client , client => client.products, {
    onDelete: "CASCADE"
})
    client: Client;

}








/* import * as mongoose from "mongoose";
import { Document } from 'mongoose';

export const ProductSchema = new mongoose.Schema ({

    title: String,
    desc:  String,
    price: {type: Number , required: true},
})




export interface Product extends Document{
    id: string ;
    title: string ;
    desc: string ;
    price: number
}
*/