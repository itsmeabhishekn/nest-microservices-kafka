import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { createOrderRequest } from './create-order-request.dto';
import { orderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {

  constructor(
    @Inject('BILLING-SERVICE') private readonly billingClient: ClientKafka){}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({userId,price}:createOrderRequest){
    console.log(userId,price);
      this.billingClient.emit(
        'order_created',
        new orderCreatedEvent('123',userId,price)
        )
  }
}
