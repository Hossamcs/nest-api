import { Controller, Post, Body, Get, Param, Patch, Delete, Req, NotFoundException, Res, Render } from "@nestjs/common";
import { Request , Response } from "express";
import { ClientsService } from "./clients.service";
import { Client } from "./client.model";

@Controller('clients')
export class ClientsController{
    constructor(readonly clientsService: ClientsService){}


    @Get()
  //  @Render('index')
    allClients(@Req() request: Request){
        return this.clientsService.findAll();
        
    }
    
    @Get(':id')
    findOne(@Param('id') id):Promise<Client>{
        return this.clientsService.findOneClient(id);
   }
    
   @Post()
  create(@Body() client: Client) {
    return this.clientsService.createClient(client)
  }

   @Delete(':id')
   deleteClient(@Param('id') id){
     return this.clientsService.removeClient(id);
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