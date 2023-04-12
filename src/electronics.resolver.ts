import { Inject } from '@nestjs/common';
import { ELECTRONICS_SERVICE, products } from './microservices/electronics/electronics.constants';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ElectronicsProduct } from './microservices/electronics/electronics.entity';
import { CreateElectronicsInput } from './dto/create-electronics-input';

@Resolver((of) => ElectronicsProduct)
export class ElectronicsProductResolver {
  constructor(
    @Inject(ELECTRONICS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Query((_returns) => [ElectronicsProduct])
  getElectronicsProducts(
    @Args('quantity', { nullable: true }) quantity?: number,
  ): Observable<ElectronicsProduct> {
    const pattern = { cmd: 'getElectronicsProducts' };
    return this.client.send(pattern, quantity || -1);
  }

  @Query((_returns) => ElectronicsProduct)
  getElectronicsProduct(
    @Args('id') quantity: string,
  ): Observable<ElectronicsProduct> {
    const pattern = { cmd: 'getElectronicsProducById' };
    return this.client.send(pattern, quantity);
  }

  @Mutation((_returns) => ElectronicsProduct)
  createElectronicsProduct(
    @Args('input') createElectronicsInput: CreateElectronicsInput,
  ): Observable<ElectronicsProduct> {
    const pattern = { cmd: 'addElectronicsProduct' };
    return this.client.send(pattern, createElectronicsInput);
  }

  @Mutation((_returns) => ElectronicsProduct)
  updateElectronicsProduct(
    @Args('id') id: string,
    @Args('input') updateElectronicsInput: CreateElectronicsInput,
  ): Observable<ElectronicsProduct> {
    const pattern = { cmd: 'updateElectronicsProduct' };
    const product: ElectronicsProduct = {
        ...updateElectronicsInput,
        id
    }
    return this.client.send(pattern, product);
  }

  @Mutation((_returns) => String)
  deleteElectronicsProduct(
    @Args('id') id: string,
  ): Observable<ElectronicsProduct> {
    const pattern = { cmd: 'removeElectronicsProduct' };
    return this.client.send(pattern, id);
  }
}
