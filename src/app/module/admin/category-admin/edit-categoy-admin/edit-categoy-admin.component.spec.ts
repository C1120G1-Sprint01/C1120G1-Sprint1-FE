import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoyAdminComponent } from './edit-categoy-admin.component';

describe('EditCategoyAdminComponent', () => {
  let component: EditCategoyAdminComponent;
  let fixture: ComponentFixture<EditCategoyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
