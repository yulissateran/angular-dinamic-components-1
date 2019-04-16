import { Component, OnInit, AfterViewInit } from '@angular/core';
import { toUnicode } from 'punycode';
import { MessageService } from 'app/services/message/message.service';

@Component({
  selector: 'app-message',
  template: ` <div>mensaje de {{ name }} : {{getMessage()}}</div>`,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit , AfterViewInit{
private name: string= 'tu'; 
  constructor(  private _messageService: MessageService) { }

  ngOnInit() {
  }
 ngAfterViewInit(){
  this.name = 'Me';
 }
 private getMessage() {
  return this._messageService.giveMeTheMessage();
}
}
