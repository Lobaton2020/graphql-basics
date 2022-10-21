import { ProductsService } from './products.service';
import { ObjectType, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @Column()
  @Field()
  price: number;
}
