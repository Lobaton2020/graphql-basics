import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import path = require('path');
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesResolver } from './categories/categories.resolver';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, CategoriesResolver],
})
export class AppModule {
  async onModuleInit() {
    await new Promise((r) => {
      setTimeout(() => {
        console.log('YES');
        r('');
      }, 2000);
    });
  }
  onModuleDestroy() {
    console.log('app fin');
  }
}
