import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChildCategoryComponent } from './delete-child-category.component';

describe('DeleteChildCategoryComponent', () => {
  let component: DeleteChildCategoryComponent;
  let fixture: ComponentFixture<DeleteChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChildCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
