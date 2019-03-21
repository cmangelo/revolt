import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  email: string;
  registeredEmail: string;
  showSuccess: boolean;
  showNoSuccess: boolean;
  showInvalidEmail: boolean;

  constructor(private readonly service: ContactService) { }

  ngOnInit() {

  }

  formSubmit() {
    this.clearMessages();
    if (!this.validateEmail(this.email)) {
      this.showInvalidEmail = true;
      return;
    }
    this.registerEmail(this.email);
  }

  private registerEmail(email: string): void {
    this.service.registerEmail(email).subscribe((success: boolean) => {
      if (success) {
        this.showSuccess = true;
        this.registeredEmail = this.email;
        this.clearForm();
      } else {
        this.showNoSuccess = true;
      }
    });
  }

  private clearMessages(): void {
    this.showInvalidEmail = false;
    this.showNoSuccess = false;
    this.showSuccess = false;
  }

  private clearForm(): void {
    this.email = '';
  }

  private validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
