import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, from, map, merge, observable, toArray, zip } from 'rxjs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CLOTHING_SERVICE } from './microservices/clothing/clothing.constants';
import { ELECTRONICS_SERVICE } from './microservices/electronics/electronics.constants';
import { ClothingProduct } from './microservices/clothing/clothing.entity';
import { ElectronicsProduct } from './microservices/electronics/electronics.entity';
import { SearchResult } from './dto/search-result';
import { SearchService } from './search.service';

@Resolver('Search')
export class SearchResolver {
  constructor(
    @Inject(CLOTHING_SERVICE) private readonly clothingClient: ClientProxy,
    @Inject(ELECTRONICS_SERVICE)
    private readonly electronicsClient: ClientProxy,
    private readonly searchervice: SearchService,
  ) {}

  @Query((_returns) => [SearchResult])
  async searchProduct(
    @Args('text') text: string,
    @Args('quantity', { nullable: true }) quantity?: number,
  ) {
    const clothingResult = this.clothingClient.send<SearchResult[]>(
      { cmd: 'searchClothingProduct' },
      text,
    );
    const electronicsResult = this.electronicsClient.send<SearchResult[]>(
      { cmd: 'searchElectronicsProduct' },
      text,
    );

    return this.searchervice.joinTwoSearchResults(
      electronicsResult,
      clothingResult,
    );
  }
}
