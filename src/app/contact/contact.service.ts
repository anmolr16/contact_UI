import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

// tslint:disable-next-line:max-line-length
const httpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/JSON; charset=utf-8', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'})};

@Injectable()
export class ContactService {


    constructor(private http: HttpClient) {}

    getContacts(): Observable<Contact[]> {
        return this.http
        .get<Contact[]>('https://facerec.kpit.com/contact/contact/getContacts', httpOptions)
          .pipe(
                retry(3),
                tap(
                    data => null,
                    error => console.error(error)
                    )
                );
    }

    getContactByName(name: String): Observable<Contact> {
        return this.http
        .get<Contact>('https://facerec.kpit.com/contact/contact/getContactByName?name=' + name, httpOptions)
          .pipe(
                retry(3),
                tap(
                    data => null,
                    error => console.error(error)
                    )
                );
    }

    createContact(payload: Contact): Observable<Contact> {
        return this.http
        .post<Contact>('https://facerec.kpit.com/contact/contact/createContact', payload, httpOptions)
        .pipe(
            retry(3),
            tap(
                data => null,
                error => console.error(error)
            )
        );
    }

}
