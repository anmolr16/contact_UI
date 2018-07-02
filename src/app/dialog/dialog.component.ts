import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact/contact';
import { MessageService } from '../message/message.service';
import { Message } from '../contact/contact';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() otp: number;
  @Input() contact: Contact;
  name: string;

  constructor(private messageService: MessageService) { }


  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  public send(contactDetails, otp: number): void {
    // console.log(contactDetails);

    // console.log(otp);
    const payload = {
      'name': contactDetails.name,
      'otp': otp
    };
    // console.log(payload);
    this.createMessage(payload, function (callback) {
      if (callback) {
        console.log('Message entry created');
      }
    });

    const messagePayload = {
      'number': contactDetails.contact,
      'otp': otp
    };
    // console.log(messagePayload);
    this.sendMessage(messagePayload, function (callback) {
      if (callback) {
        console.log('Message Sent');
      }
    });
  }

  private createMessage(payload: Message, callback) {
    try {
      this.messageService.setMessageDetail(payload)
        .subscribe(result => {
          // console.log(result);
          callback(result === null ? {} : result);
        }, err => { });
    } catch (error) {
      console.error(error);
    }
  }


  private sendMessage(payload: any, callback): void {
    try {
      this.messageService.sendSMS(payload)
        .subscribe(result => {
          // console.log(result);
          callback(result === null ? {} : result);
        }, err => { });
    } catch (error) {
    }
  }



  ngOnInit() {

  }
}
