import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messageToEverything:string = 'hello word'; // of course

  constructor() { }
  giveMeTheMessage():string {
    return this.messageToEverything;
}

}
