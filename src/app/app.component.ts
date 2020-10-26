import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactList: Contact[] = [];
  selectedContact: Contact;

  constructor(){
    this.selectedContact = new Contact();
  }

  addNewContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  editContact(contact: Contact): void {
    this.selectedContact = contact;
  }

}
