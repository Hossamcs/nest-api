import { Controller, Post, Body, Get, Param, Patch, Delete, Req, NotFoundException, Res, Render } from "@nestjs/common";
import { Request , Response } from "express";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController{
    constructor(readonly productsService: ProductsService){}
      
    @Get()
   allProducts(@Req() request: Request){
        return this.productsService.findAll();
        
    }
    
    @Get(':id')
    findOne(@Param('id') id):Promise<Product>{
        return this.productsService.findOneProduct(id);
   }
    
   @Post()
  create(@Body() product: Product) {
    return this.productsService.createProduct(product)
  }

   @Delete(':id')
   deleteProduct(@Param('id') id){
     return this.productsService.removeProduct(id);
   }
   












//@Body() or we can use @Req & @Res as in express
  /*  @Post()
    addProduct(
    @Body('title') prodTitle: string ,
    @Body('desc')  prodDesc: string ,
    @Body('price') prodPrice: number
    ){
      const generatedId= this.productsService.insertProduct(prodTitle , prodDesc , prodPrice);
      return {id: generatedId}   
    }


    @Get()
    allProducts(){
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    oneProduct(@Param('id') prodId:string){
        return this.productsService.getOneProduct(prodId);
    }


    @Patch(':id')
    update(
    @Param('id') prodId:string ,
    @Body('title') prodTitle: string ,
    @Body('desc')  prodDesc: string ,
    @Body('price') prodPrice: number
    ){
      this.productsService.updateProduct(prodId , prodTitle ,prodDesc,prodPrice);
      return 'Has been updated' ;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId:string){
    this.productsService.deleteProduct(prodId);
    return 'Has been deleted';
    }
*/
}