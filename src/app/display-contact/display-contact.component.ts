import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  contactList: Contact[] = [];
  selectedContact: Contact;
  edit: boolean;

  constructor(private contactService: ContactService){
    this.selectedContact = new Contact();
    this.contactList = this.contactService.getContacts();
  }

  ngOnInit() {
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
