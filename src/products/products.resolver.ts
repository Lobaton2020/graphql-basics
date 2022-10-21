import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateProduct } from './dto/create.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  create(
    @Args('product', { type: () => CreateProduct }) product: CreateProduct,
  ) {
    return this.productService.create(product);
  }
}
