import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularContactComponent } from './particular-contact.component';

describe('ParticularContactComponent', () => {
  let component: ParticularContactComponent;
  let fixture: ComponentFixture<ParticularContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
