import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerManagerComponent } from './add-customer-manager.component';

describe('AddCustomerManagerComponent', () => {
  let component: AddCustomerManagerComponent;
  let fixture: ComponentFixture<AddCustomerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
