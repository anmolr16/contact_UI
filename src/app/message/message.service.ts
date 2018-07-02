import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../contact/contact';
import { Observable } from 'rxjs/Observable';
import { tap, retry } from 'rxjs/operators';

// tslint:disable-next-line:max-line-length
const httpOptions = {headers: new HttpHeaders ({'Content-Type': 'application/JSON; charset=utf-8', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'})};
// tslint:disable-next-line:max-line-length
const httpOptionsNew = {headers: new HttpHeaders ({'Access-Control-Allow-Origin': '*'})};


@Injectable()
export class MessageService {
    constructor(private http: HttpClient) {}

    getMessages(): Observable<Message[]> {
        return this.http
        .get<Message[]>('https://facerec.kpit.com/contact/message/getMessages', httpOptions)
          .pipe(
                retry(3),
                tap(
                    data => null,
                    error => console.error(error)
                    )
                );
    }

    setMessageDetail(payload: Message): Observable<Message> {
        return this.http
        .post<Message>('https://facerec.kpit.com/contact/message/createMessage', payload, httpOptions)
        .pipe(
            retry(3),
            tap(
                data => null,
                error => console.error(error)
            )
        );
    }

    sendSMS(payload: any): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this.http.get<any>(
        'https://control.msg91.com/api/sendotp.php?authkey=223101ANcnPk9jRcdr5b3519c4&mobile='
        + payload.number + '&message=Your%20otp%20is%20'
        + payload.otp + '&sender=OTPSMS&otp=' + payload.otp, httpOptionsNew)
        .pipe(tap(response => null));
    }

}
