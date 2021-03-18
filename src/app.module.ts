import { Module, NestModule , MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.model';
import { Client } from "./clients/client.model";
import { ClientsModule } from './clients/clients.module';
import { AppMiddleware } from "./middlewares/app.middleware";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [ProductsModule , ClientsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'products', //
    entities: [Product , Client],    //
    synchronize: true,
  }), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes('/'||'products'||'clients');
  }

}
