import { Inject, Injectable } from '@nestjs/common';
import { orderCreatedEvent } from './order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { getUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {

  constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientKafka){}

  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent : orderCreatedEvent){
    this.authClient
    .send('get_user',new getUserRequest(orderCreatedEvent.userId))
    .subscribe((user)=>{
      
      console.log(`Billing user with strip id ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`);
    })
  }

}
