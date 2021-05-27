import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeletePostAdminComponent } from './list-delete-post-admin.component';

describe('ListDeletePostAdminComponent', () => {
  let component: ListDeletePostAdminComponent;
  let fixture: ComponentFixture<ListDeletePostAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeletePostAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeletePostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
