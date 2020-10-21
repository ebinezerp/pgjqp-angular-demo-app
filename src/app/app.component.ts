import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: Contact;
  contactList: Contact[] = [];

  constructor(){
    this.contact = new Contact();
  }


  addContact(contactForm: NgForm): void {
    const contact: Contact = contactForm.value;
    this.contactList.push(contact);
    contactForm.resetForm();
  }

}
