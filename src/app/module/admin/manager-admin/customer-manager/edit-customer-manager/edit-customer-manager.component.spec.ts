import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerManagerComponent } from './edit-customer-manager.component';

describe('EditCustomerManagerComponent', () => {
  let component: EditCustomerManagerComponent;
  let fixture: ComponentFixture<EditCustomerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
