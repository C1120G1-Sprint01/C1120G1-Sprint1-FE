import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostAdminComponent } from './delete-post-admin.component';

describe('DeletePostAdminComponent', () => {
  let component: DeletePostAdminComponent;
  let fixture: ComponentFixture<DeletePostAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
