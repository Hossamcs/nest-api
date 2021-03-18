import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
//import { InjectModel } from "@nestjs/mongoose";
import { Client}  from './client.model';
//import { Model } from "mongoose";


@Injectable()
export class ClientsService  {
    clients : Client []= [] ;

    constructor(
        @InjectRepository(Client)
        private clientsRepository: Repository<Client>,
    ){}

    findAll(): Promise<Client[]> {
        return this.clientsRepository.find();
      }
      
    async findOneClient(id: string): Promise<Client>{
        const client = await this.clientsRepository.findOne(id);
          if(!client)
            throw new NotFoundException('Not fount');
          else
            return this.clientsRepository.findOne(client);

     }

     createClient = async (client: Client) => {
        return await this.clientsRepository.save(client);
      };

      async removeClient(id: string):Promise<Client>{
          const client = await this.clientsRepository.findOne(id);
          if(!client)
            throw new NotFoundException('Not fount');
          else
            return this.clientsRepository.remove(client);
      }
/*
      async updateProduct(id: string , product: Product):Promise<Product>{
      
        return await this.productsRepository.updateById()
       }

       */
 /*
     async delete(product: Product): Promise<Product>{
      return await this.productsRepository.remove(product);
     }

   /*  async update(id: string , product: Product):Promise<Product>{
      
      return await this.productsRepository.findByIdAndUpdate(id, product , {new : true});
     }
     */
/*
insertProduct(title: string , desc: string , price: number){
    const prodId = Math.random().toString()  ;
    const newProduct = new this.productModel(prodId, title , desc , price);
    this.products.push(newProduct);
    return prodId;
}

getAllProducts(){
    //[...this.products]
    //this.produts.slice()
    return this.products;
}

getOneProduct(productId: string){
 const product = this.findProductById(productId)[0];

 return product;
}

deleteProduct(productId: string){
    const index = this.findProductById(productId)[1];
    this.products.splice(index , 1);
}
updateProduct(productId: string,title: string , desc: string , price: number){
    const [product , index ] = this.findProductById(productId);
    const updateProduct = {...product};
    if(title)
    {
        updateProduct.title = title ;
    }
    if(desc)
    {
        updateProduct.desc = desc ;
    }
    if(price)
    {
        updateProduct.price = price ;
    }
    this.products[index] = updateProduct;
}


private findProductById(productId:string): [Product,number]{
    const productIndex =this.products.findIndex(prod => prod.id === productId);
    const product = this.products[productIndex];
    if(!product)
    {
        throw new NotFoundException('NO SUCH ID');
    }else{
        return [product , productIndex];
    }
}
*/
}
