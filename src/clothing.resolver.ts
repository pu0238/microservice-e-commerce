import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, from, toArray } from 'rxjs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClothingProduct } from './microservices/clothing/clothing.entity';
import { CLOTHING_SERVICE } from './microservices/clothing/clothing.constants';
import { CreateElectronicsInput } from './dto/create-electronics-input';

@Resolver((of) => ClothingProduct)
export class ClothingProductResolver {
  constructor(
    @Inject(CLOTHING_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Query((_returns) => [ClothingProduct])
  getClothingProducts(
    @Args('quantity', { nullable: true }) quantity?: number,
  ): Observable<ClothingProduct> {
    console.log(12)
    const pattern = { cmd: 'getClothingProducts' };
    return this.client.send(pattern, quantity || -1);
  }

  @Query((_returns) => ClothingProduct)
  getClothingProduct(
    @Args('id') quantity: string,
  ): Observable<ClothingProduct> {
    const pattern = { cmd: 'getClothingProducById' };
    return this.client.send(pattern, quantity);
  }

  @Mutation((_returns) => ClothingProduct)
  createClothingProduct(
    @Args('input') createElectronicsInput: CreateElectronicsInput,
  ): Observable<ClothingProduct> {
    const pattern = { cmd: 'addClothingProduct' };
    return this.client.send(pattern, createElectronicsInput);
  }

  @Mutation((_returns) => ClothingProduct)
  updateClothingProduct(
    @Args('id') id: string,
    @Args('input') updateElectronicsInput: CreateElectronicsInput,
  ): Observable<ClothingProduct> {
    const pattern = { cmd: 'updateClothingProduct' };
    const product: ClothingProduct = {
        ...updateElectronicsInput,
        id
    }
    return this.client.send(pattern, product);
  }

  @Mutation((_returns) => String)
  deleteClothingProduct(
    @Args('id') id: string,
  ): Observable<ClothingProduct> {
    const pattern = { cmd: 'removeClothingProduct' };
    return this.client.send(pattern, id);
  }
}
