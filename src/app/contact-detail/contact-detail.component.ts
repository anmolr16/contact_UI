import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  cont: Contact;
  otp: Number;
  contName: string;
  contNumber: string;

  constructor(private route: ActivatedRoute, private contactService: ContactService) { }

  sendMessage(contact): void {
    // console.log(contact);
    this.otp = Math.floor(100000 + Math.random() * 900000);
  }

  private getContactDetail(name): void {
    try {
      this.contactService.getContactByName(name)
        .subscribe(contact => {
          // console.log(contact);
          this.cont = contact;
          this.contName = this.cont.name;
          this.contNumber = this.cont.contact;
        }, err => { });
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.getContactDetail(name);
  }

}
