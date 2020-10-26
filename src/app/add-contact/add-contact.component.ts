import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() addingContact: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.contact = new Contact();
   }

  ngOnInit(): void {
  }

  addContact(contactForm: NgForm): void {
    const contact: Contact = contactForm.value;
    console.log(contact);
    this.addingContact.emit(contact);
    contactForm.resetForm();
  }

}
