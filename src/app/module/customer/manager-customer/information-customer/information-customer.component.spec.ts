import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCustomerComponent } from './information-customer.component';

describe('InformationCustomerComponent', () => {
  let component: InformationCustomerComponent;
  let fixture: ComponentFixture<InformationCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
