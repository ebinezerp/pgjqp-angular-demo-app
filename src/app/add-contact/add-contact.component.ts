import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;
  edit: boolean;


  constructor(private contactService: ContactService) {
    this.contact = new Contact();
    this.edit = false;
   }



  ngOnInit(): void {
  }

  addContact(contactForm: NgForm): void {
    const contact: Contact = contactForm.value;
    this.contactService.addContact(contact);
    contactForm.resetForm();
  }

  updateContact(contactForm: NgForm): void{
    const contact: Contact = contactForm.value;
    contactForm.resetForm();
  }

}
