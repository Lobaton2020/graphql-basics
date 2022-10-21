import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Module({
  providers: [ProductsService, ProductsResolver],
  imports: [TypeOrmModule.forFeature([Product])],
})
export class ProductsModule {}
