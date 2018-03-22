import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {MailService} from '../services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Simple Example contact-up page';
  form = {
    name: '',
    email: '',
    topic: '',
    message: ''
  };
  public data: any = [];

  constructor(
    private http: HttpClient,
    private mailService: MailService
  ) { }

  saveForm(form) {
    this.mailService.sendMail(form.value)
    .subscribe(res => {
      console.log(res);

    });

  }

  save(name, email, mobile, subject, message): void {
    this.data['form.name'] = name;
    this.data['form.email'] = email;
    this.data['form.topic'] = subject;
    this.data['form.message'] = message;
   }

  ngOnInit() {
  }

}
