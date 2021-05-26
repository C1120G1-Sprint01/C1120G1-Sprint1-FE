import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoyAdminComponent } from './delete-categoy-admin.component';

describe('DeleteCategoyAdminComponent', () => {
  let component: DeleteCategoyAdminComponent;
  let fixture: ComponentFixture<DeleteCategoyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategoyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
