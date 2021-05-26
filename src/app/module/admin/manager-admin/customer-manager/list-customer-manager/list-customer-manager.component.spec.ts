import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerManagerComponent } from './list-customer-manager.component';

describe('ListCustomerManagerComponent', () => {
  let component: ListCustomerManagerComponent;
  let fixture: ComponentFixture<ListCustomerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCustomerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
