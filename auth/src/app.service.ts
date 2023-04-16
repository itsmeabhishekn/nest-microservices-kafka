import {  Injectable } from '@nestjs/common';
import { getUserRequest } from './get-user-request.dto';


@Injectable()
export class AppService {

 private readonly users:any[] = [
  {
    userId:'123',
    stripeUserId:'43234'
  },
  {
    userId:'345',
    stripeUserId:'27279'
  }
 ]

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest : getUserRequest){
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }


}
