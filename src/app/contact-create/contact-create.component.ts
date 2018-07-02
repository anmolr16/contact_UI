import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
personName: string;
contactNumber: number;
contact: Contact;

  constructor(private contactService: ContactService, private router: Router) { }

  saveContact(): void {
    // console.log(this.personName);
    // console.log(this.contactNumber);

    const payload = {
      'name': this.personName,
      'contact': this.contactNumber
    };

    console.log(payload);
     this.createContact(payload, function(callback) {
      if (callback) {
                  console.log('Contact Created');
                this.router.navigateByUrl('/contacts/list');
              }
     }.bind(this));
  }

  private createContact(payload, callback): void {
    try {
      // tslint:disable-next-line:no-unused-expression
      this.contactService.createContact(payload)
      .subscribe(result => {
        // console.log(result);
        callback (result === null ? {} : result);
      }, err => {});
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
  }

}
