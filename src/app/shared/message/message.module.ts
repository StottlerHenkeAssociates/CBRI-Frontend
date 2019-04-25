import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageComponent],
  providers: [MessageService],
  exports: [MessageComponent]
})
export class MessageModule { }