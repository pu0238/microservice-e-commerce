import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { ELECTRONICS_SERVICE } from './electronics.constants';
import { ElectronicsService } from './electronics.service';
import { ElectronicsProduct } from './electronics.entity';
import { SearchResult } from 'src/dto/search-result';

@Controller()
export class ElectronicsController {
  constructor(
    @Inject(ELECTRONICS_SERVICE) private readonly client: ClientProxy,
    private readonly electronicsService: ElectronicsService,
  ) {}

  @MessagePattern({ cmd: 'getElectronicsProducts' })
  getProducts(quantity: number): ElectronicsProduct[] {
    return this.electronicsService.getProducts(quantity);
  }

  @MessagePattern({ cmd: 'getElectronicsProducById' })
  getProducById(id: string): ElectronicsProduct {
    return this.electronicsService.getProducById(id);
  }

  @MessagePattern({ cmd: 'addElectronicsProduct' })
  addProduct(product: ElectronicsProduct): ElectronicsProduct{
    return this.electronicsService.addProduct(product);
  }

  @MessagePattern({ cmd: 'updateElectronicsProduct' })
  updateProduct(product: ElectronicsProduct): ElectronicsProduct{
    return this.electronicsService.updateProduct(product);
  }

  @MessagePattern({ cmd: 'removeElectronicsProduct' })
  removeProduct(id: string): string{
    return this.electronicsService.removeProduct(id);
  }

  @MessagePattern({ cmd: 'searchElectronicsProduct' })
  search(text: string): SearchResult[]{
    const searchResult = this.electronicsService.search(text);
    return searchResult.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      source: 'electronics',
    }));
  }
}
