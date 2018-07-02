import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService) { }

  onSelect(contact): void {
    this.selectedContact = contact;
    // console.log(this.selectedContact);
  }

  private getContact(): void {
    try {
      // tslint:disable-next-line:no-unused-expression
      this.contactService.getContacts()
      .subscribe(contacts => {
        // console.log(contacts.length);
        //   console.table(contacts);
          this.contacts = contacts;
      }, err => {});
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    this.contacts = [];
  this.getContact();
  }

}
