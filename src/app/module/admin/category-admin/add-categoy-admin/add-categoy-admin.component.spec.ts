import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoyAdminComponent } from './add-categoy-admin.component';

describe('AddCategoyAdminComponent', () => {
  let component: AddCategoyAdminComponent;
  let fixture: ComponentFixture<AddCategoyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
