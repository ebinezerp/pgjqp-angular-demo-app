import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, OnChanges {

  contact: Contact;
  @Input()editContact: Contact;
  @Input()edit: boolean;
  @Output() addingContact: EventEmitter<Contact> = new EventEmitter();
  @Output() updatingContact: EventEmitter<Contact> = new EventEmitter();

  constructor() {
    this.contact = new Contact();
   }

   ngOnChanges(): void {
    this.contact.name = this.editContact.name;
    this.contact.email = this.editContact.email;
    this.contact.mobile = this.editContact.mobile;
   }

  ngOnInit(): void {
  }

  addContact(contactForm: NgForm): void {
    const contact: Contact = contactForm.value;
    console.log(contact);
    this.addingContact.emit(contact);
    contactForm.resetForm();
  }

  updateContact(contactForm: NgForm): void{
    const contact: Contact = contactForm.value;
    this.updatingContact.emit(contact);
    contactForm.resetForm();
  }

}
