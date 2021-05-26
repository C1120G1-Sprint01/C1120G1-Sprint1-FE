import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostCustomerComponent } from './delete-post-customer.component';

describe('DeletePostCustomerComponent', () => {
  let component: DeletePostCustomerComponent;
  let fixture: ComponentFixture<DeletePostCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
