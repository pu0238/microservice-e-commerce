import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class ClothingProduct {
  @Field((type) => ID)
  id?: string;
  
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field()
  price: number;

  @Field()
  image: string;
}