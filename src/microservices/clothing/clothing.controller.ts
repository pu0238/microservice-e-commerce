import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { CLOTHING_SERVICE } from './clothing.constants';
import { ClothingService } from './clothing.service';
import { ClothingProduct } from './clothing.entity';

@Controller()
export class ClothingController {
  constructor(
    @Inject(CLOTHING_SERVICE) private readonly client: ClientProxy,
    private readonly electronicsService: ClothingService,
  ) {}

  @MessagePattern({ cmd: 'getClothingProducts' })
  getProducts(quantity: number): ClothingProduct[] {
    console.log(quantity)
    return this.electronicsService.getProducts(quantity);
  }

  @MessagePattern({ cmd: 'getClothingProducById' })
  getProducById(id: string): ClothingProduct {
    return this.electronicsService.getProducById(id);
  }

  @MessagePattern({ cmd: 'addClothingProduct' })
  addProduct(product: ClothingProduct): ClothingProduct{
    return this.electronicsService.addProduct(product);
  }

  @MessagePattern({ cmd: 'updateClothingProduct' })
  updateProduct(product: ClothingProduct): ClothingProduct{
    return this.electronicsService.updateProduct(product);
  }

  @MessagePattern({ cmd: 'removeClothingProduct' })
  removeProduct(id: string): string{
    return this.electronicsService.removeProduct(id);
  }
}
