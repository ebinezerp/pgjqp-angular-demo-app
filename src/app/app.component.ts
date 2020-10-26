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
  edit: boolean;

  constructor(){
    this.selectedContact = new Contact();
  }

  addNewContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  editContact(contact: Contact): void {
    this.selectedContact = contact;
    this.edit = true;
  }

  updateContact(contact: Contact): void {
    const arrayContact =   this.contactList.find(con => con.email === contact.email);
    const index = this.contactList.indexOf(arrayContact);
    this.contactList[index] = contact;
    this.edit = false;
    this.selectedContact = new Contact();
  }

}
