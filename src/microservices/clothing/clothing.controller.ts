import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { CLOTHING_SERVICE } from './clothing.constants';
import { ClothingService } from './clothing.service';
import { ClothingProduct } from './clothing.entity';
import { SearchResult } from 'src/dto/search-result';

@Controller()
export class ClothingController {
  constructor(
    @Inject(CLOTHING_SERVICE) private readonly client: ClientProxy,
    private readonly clothingService: ClothingService,
  ) {}

  @MessagePattern({ cmd: 'getClothingProducts' })
  getProducts(quantity: number): ClothingProduct[] {
    return this.clothingService.getProducts(quantity);
  }

  @MessagePattern({ cmd: 'getClothingProducById' })
  getProducById(id: string): ClothingProduct {
    return this.clothingService.getProducById(id);
  }

  @MessagePattern({ cmd: 'addClothingProduct' })
  addProduct(product: ClothingProduct): ClothingProduct {
    return this.clothingService.addProduct(product);
  }

  @MessagePattern({ cmd: 'updateClothingProduct' })
  updateProduct(product: ClothingProduct): ClothingProduct {
    return this.clothingService.updateProduct(product);
  }

  @MessagePattern({ cmd: 'removeClothingProduct' })
  removeProduct(id: string): string {
    return this.clothingService.removeProduct(id);
  }

  @MessagePattern({ cmd: 'searchClothingProduct' })
  search(text: string): SearchResult[] {
    const searchResult = this.clothingService.search(text);
    return searchResult.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      source: 'clothing',
    }));
  }
}
