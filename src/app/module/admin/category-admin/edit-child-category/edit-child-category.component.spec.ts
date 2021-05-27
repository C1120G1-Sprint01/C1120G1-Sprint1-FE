import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChildCategoryComponent } from './edit-child-category.component';

describe('EditChildCategoryComponent', () => {
  let component: EditChildCategoryComponent;
  let fixture: ComponentFixture<EditChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChildCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
