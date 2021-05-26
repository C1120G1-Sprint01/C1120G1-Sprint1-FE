import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostCustomerComponent } from './add-post-customer.component';

describe('AddPostCustomerComponent', () => {
  let component: AddPostCustomerComponent;
  let fixture: ComponentFixture<AddPostCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
