import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CLOTHING_SERVICE } from './clothing.constants';
import { ClothingController } from './clothing.controller';
import { ClothingService } from './clothing.service';

@Module({
  imports: [
    ClientsModule.register([{ name: CLOTHING_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [ClothingController],
  providers: [ClothingService],
})
export class ClothingModule {}
