import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
//import { InjectModel } from "@nestjs/mongoose";
import { Product}  from './product.model';
//import { Model } from "mongoose";


@Injectable()
export class ProductsService  {
    products : Product []= [] ;

    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ){}

    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
      }
      
    async findOneProduct(id: string): Promise<Product>{
        const product = await this.productsRepository.findOne(id);
          if(!product)
            throw new NotFoundException('Not fount');
          else
            return this.productsRepository.findOne(product);

     }

     createProduct = async (product: Product) => {
        return await this.productsRepository.save(product);
      };

      async removeProduct(id: string):Promise<Product>{
          const product = await this.productsRepository.findOne(id);
          if(!product)
            throw new NotFoundException('Not fount');
          else
            return this.productsRepository.remove(product);
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
