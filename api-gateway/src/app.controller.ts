import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { createOrderRequest } from './create-order-request.dto';
import { create } from 'domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequest : createOrderRequest){
  
    this.appService.createOrder(createOrderRequest)
  }
}
