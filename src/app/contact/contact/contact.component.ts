import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  email: string;
  success: boolean;

  constructor(private readonly service: ContactService) { }

  ngOnInit() {

  }

  registerEmail() {
    if (!this.validateEmail(this.email)) {
      console.log('invalid email');
    }

    this.service.registerEmail().subscribe((data) => this.success = data);

  }

  validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!')
    return false;
  }

}
