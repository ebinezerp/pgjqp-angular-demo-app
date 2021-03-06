import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';


@Injectable()
export class ContactService{

   private contactList: Contact[];

   constructor() {
     this.contactList = [];
   }

   // to recevie contact from add-contact componant
   addContact(contact: Contact): void {
     this.contactList.push(contact);
     this.updatesessionStorage();
   }

   getContact(email: string): Contact{
     return this.contactList.find(contact => contact.email === email);
   }

   // to send contactList to display-contact component
   getContacts(): Contact[] {
     return this.contactList;
   }

   update(contact: Contact): void {
    const temp = this.contactList.find(con => con.email === contact.email);
    const index = this.contactList.indexOf(temp);
    this.contactList[index] = contact;
   }


   updatesessionStorage(): void{
    sessionStorage.setItem('contactList', JSON.stringify(this.contactList));
   }

}
