import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';



@Injectable()
export class MailService {

baseURL = environment.baseURL = '/mail';

  constructor(private http: Http) { }

  BASE_URL = 'http://localhost:3000/mail';

  sendMail(form) {
    return this.http.post(`${this.BASE_URL}/kontakt`, form)
    .map(res => res.json())
    .catch(e => Observable.throw(e));
  }

}
