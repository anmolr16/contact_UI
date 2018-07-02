import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MessageComponent } from './message/message.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';

const routes: Routes = [
    {'path': '', redirectTo: 'contacts/list', pathMatch: 'full'},
    {'path': 'contacts', 'children': [
        {'path': 'list', 'component': ContactComponent},
        {'path': 'create', 'component': ContactCreateComponent},
        {'path': 'detail/:name', 'component': ContactDetailComponent},
    ]},
    {'path': 'messages', 'component': MessageComponent}
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {

}
