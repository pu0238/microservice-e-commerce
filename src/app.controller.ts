import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ELECTRONICS_SERVICE } from './microservices/electronics/electronics.constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject(ELECTRONICS_SERVICE) private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}
}
