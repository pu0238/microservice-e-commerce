import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { ELECTRONICS_SERVICE, products } from './electronics.constants';
import { randomUUID } from 'crypto';
import { ElectronicsProduct } from './electronics.entity';
@Injectable()
export class ElectronicsService {
  constructor(
    @Inject(ELECTRONICS_SERVICE) private readonly client: ClientProxy,
  ) {}
  // TODO: MOVE DATA TO DATABASE
  private products: ElectronicsProduct[] = products;

  getProducts(quantity?: number): ElectronicsProduct[] {
    if (-1 === quantity) return this.products;
    return this.products.slice(0, quantity);
  }

  getProducById(id: string): ElectronicsProduct {
    const found = this.products.find((element) => element.id === id);
    if (!found) throw new NotFoundException(`Product by id: ${id} not found`);
    return found;
  }

  addProduct(product: ElectronicsProduct): ElectronicsProduct {
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

  updateProduct(product: ElectronicsProduct): ElectronicsProduct {
    this.removeProduct(product.id);
    this.products.push(product);
    return product
  }
}
