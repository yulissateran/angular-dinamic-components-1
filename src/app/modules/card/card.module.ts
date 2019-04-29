import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'app/services/message/message.service';
import { MessageModule } from '../message/message.module';
import { CardComponent } from './components/card.component';

@NgModule({
  imports: [
    CommonModule,
    MessageModule
  ],
  declarations: [
    CardComponent
  ],
    exports : [CardComponent],
    providers: [MessageService],
    // entryComponents: [ MessageComponent ], 
})
export class CardModule { }
