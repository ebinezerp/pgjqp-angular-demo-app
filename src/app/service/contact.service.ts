import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';



@Injectable()
export class ContactService{

   private contactList: Contact[];

   constructor() {
     const con1 = new Contact('dummy1', 'dummy1@gmail.com', '6786786789');
     const con2 = new Contact('dummy2', 'dummy2@gmail.com', '9789789789');
     this.contactList = [con1, con2];
   }

   // to recevie contact from add-contact componant
   addContact(contact: Contact): void {
     this.contactList.push(contact);
   }

   getContact(email: string): Contact{
     return this.contactList.find(contact => contact.email === email);
   }

   // to send contactList to display-contact component
   getContacts(): Contact[] {
     return this.contactList;
   }

}
