import { Component, OnInit, AfterViewInit, Input, Output ,EventEmitter} from '@angular/core';
import { MessageService } from 'app/services/message/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit , AfterViewInit{
private name: string= 'tu'; 
@Input() data: string ;
@Output() closed: EventEmitter<any> = new EventEmitter<any>();
  constructor(  private _messageService: MessageService) { }

  ngOnInit() {
  }
 ngAfterViewInit(){
  this.name = this.data;
 }
 private getMessage() {
return this.data
}
close(){
this.closed.emit(true)
}
}
