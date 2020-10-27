import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  contactList: Contact[] = [];
  @Output() editingContact: EventEmitter<Contact> = new EventEmitter();

  constructor(private contactService: ContactService){
    this.contactList = this.contactService.getContacts();
  }

  ngOnInit() {
  }

  addNewContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  editContact(contact: Contact): void {
    this.editingContact.emit(contact);
  }

}
