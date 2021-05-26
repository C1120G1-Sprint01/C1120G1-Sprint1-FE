import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformationCustomerComponent } from './edit-information-customer.component';

describe('EditInformationCustomerComponent', () => {
  let component: EditInformationCustomerComponent;
  let fixture: ComponentFixture<EditInformationCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInformationCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInformationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
