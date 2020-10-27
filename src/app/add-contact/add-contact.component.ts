import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, OnChanges {

  @Input() selectedContact: Contact = new Contact();
  contact: Contact;
  edit: boolean;


  constructor(private contactService: ContactService) {
    this.contact = new Contact();
    this.edit = false;
   }

   ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.contact.name = this.selectedContact.name;
    this.contact.email = this.selectedContact.email;
    this.contact.mobile = this.selectedContact.mobile;
    console.log(this.selectedContact.email);
    if ( this.selectedContact.email != undefined){
      this.edit = true;
    }
  }

  addContact(contactForm: NgForm): void {
    const contact: Contact = contactForm.value;
    this.contactService.addContact(contact);
    contactForm.resetForm();
  }

  updateContact(contactForm: NgForm): void{
    const contact: Contact = contactForm.value;
    this.contactService.update(contact);
    contactForm.resetForm();
    this.edit = false;
  }

}
