import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoyAdminComponent } from './list-categoy-admin.component';

describe('ListCategoyAdminComponent', () => {
  let component: ListCategoyAdminComponent;
  let fixture: ComponentFixture<ListCategoyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
