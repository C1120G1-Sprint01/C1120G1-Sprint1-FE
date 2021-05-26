import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostCustomerComponent } from './edit-post-customer.component';

describe('EditPostCustomerComponent', () => {
  let component: EditPostCustomerComponent;
  let fixture: ComponentFixture<EditPostCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
