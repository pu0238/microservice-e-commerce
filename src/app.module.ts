import { Module } from '@nestjs/common';
import { ElectronicsModule } from './microservices/electronics/electronics.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ELECTRONICS_SERVICE } from './microservices/electronics/electronics.constants';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective, GraphQLSchema } from 'graphql';
import { ElectronicsProductResolver } from './electronics.resolver';
import { ClothingProductResolver } from './clothing.resolver';
import { CLOTHING_SERVICE } from './microservices/clothing/clothing.constants';
import { ClothingModule } from './microservices/clothing/clothing.module';
import { SearchResolver } from './search.resolver';
import { SearchService } from './search.service';

@Module({
  imports: [
    ElectronicsModule,
    ClothingModule,
    ClientsModule.register([
      { name: CLOTHING_SERVICE, transport: Transport.TCP },
      { name: ELECTRONICS_SERVICE, transport: Transport.TCP },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  controllers: [],
  providers: [
    SearchService,
    ClothingProductResolver,
    ElectronicsProductResolver,
    SearchResolver,
  ],
})
export class AppModule {}
