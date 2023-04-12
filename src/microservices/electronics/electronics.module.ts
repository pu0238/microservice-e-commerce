import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ELECTRONICS_SERVICE } from './electronics.constants';
import { ElectronicsController } from './electronics.controller';
import { ElectronicsService } from './electronics.service';

@Module({
  imports: [
    ClientsModule.register([{ name: ELECTRONICS_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [ElectronicsController],
  providers: [ElectronicsService],
})
export class ElectronicsModule {}
