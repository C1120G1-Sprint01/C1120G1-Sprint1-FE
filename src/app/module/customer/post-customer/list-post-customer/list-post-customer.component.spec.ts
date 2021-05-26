import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostCustomerComponent } from './list-post-customer.component';

describe('ListPostCustomerComponent', () => {
  let component: ListPostCustomerComponent;
  let fixture: ComponentFixture<ListPostCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
