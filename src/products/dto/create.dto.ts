import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateProduct {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  price: number;
}
