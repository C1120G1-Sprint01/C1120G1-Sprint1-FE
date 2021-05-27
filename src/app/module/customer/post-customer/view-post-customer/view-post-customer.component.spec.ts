import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostCustomerComponent } from './view-post-customer.component';

describe('ViewPostCustomerComponent', () => {
  let component: ViewPostCustomerComponent;
  let fixture: ComponentFixture<ViewPostCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
