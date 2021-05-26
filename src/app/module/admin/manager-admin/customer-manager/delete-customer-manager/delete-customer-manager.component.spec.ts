import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCustomerManagerComponent } from './delete-customer-manager.component';

describe('DeleteCustomerManagerComponent', () => {
  let component: DeleteCustomerManagerComponent;
  let fixture: ComponentFixture<DeleteCustomerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCustomerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCustomerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
