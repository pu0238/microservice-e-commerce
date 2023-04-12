import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CLOTHING_SERVICE, products } from './clothing.constants';
import { randomUUID } from 'crypto';
import { ClothingProduct } from './clothing.entity';
@Injectable()
export class ClothingService {
  constructor(
    @Inject(CLOTHING_SERVICE) private readonly client: ClientProxy,
  ) {}
  // TODO: MOVE DATA TO DATABASE
  private products: ClothingProduct[] = products;

  getProducts(quantity?: number): ClothingProduct[] {
    if (-1 === quantity) return this.products;
    return this.products.slice(0, quantity);
  }

  getProducById(id: string): ClothingProduct {
    const found = this.products.find((element) => element.id === id);
    if (!found) throw new NotFoundException(`Product by id: ${id} not found`);
    return found;
  }

  addProduct(product: ClothingProduct): ClothingProduct {
    product.id = randomUUID();
    this.products.push(product);
    return product;
  }

  removeProduct(id: string): string {
    const found = this.getProducById(id);
    const indexOfProduct = this.products.indexOf(found);
    if (indexOfProduct > -1) {
      this.products.splice(indexOfProduct, 1);
    }
    return id
  }

  updateProduct(product: ClothingProduct): ClothingProduct {
    this.removeProduct(product.id);
    this.products.push(product);
    return product
  }
}
