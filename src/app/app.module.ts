import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from '../../node_modules/angular2-modal/plugins/bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { ContactService } from './contact/contact.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message/message.service';
import { ContactCreateComponent } from './contact-create/contact-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MessageComponent,
    ContactDetailComponent,
    DialogComponent,
    ContactCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
