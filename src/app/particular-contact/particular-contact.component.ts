import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../model/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-particular-contact',
  templateUrl: './particular-contact.component.html',
  styleUrls: ['./particular-contact.component.css']
})
export class ParticularContactComponent implements OnInit {

  email: string;
  contact: Contact = new Contact();

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService) {

    // this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.email = this.activatedRoute.snapshot.queryParamMap.get('email');
    this.contact = this.contactService.getContact(this.email);

  }

  ngOnInit(): void {
  }

}
