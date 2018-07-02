import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from '../contact/contact';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[];
  constructor(private messageService: MessageService) { }

  private getMessages(): void {
    try {
      this.messageService.getMessages()
        .subscribe(messages => {
          // console.log(messages);
          this.messages = messages;
        }, err => { });
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    this.getMessages();
  }

}
