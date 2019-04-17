import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'app/components/card/card.component';
import { MessageComponent } from 'app/components/message/message.component';
import { MessageService } from 'app/services/message/message.service';
import { MessageModule } from '../message/message.module';

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
