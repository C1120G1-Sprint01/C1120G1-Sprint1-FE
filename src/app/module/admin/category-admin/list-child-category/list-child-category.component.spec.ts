import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChildCategoryComponent } from './list-child-category.component';

describe('ListChildCategoryComponent', () => {
  let component: ListChildCategoryComponent;
  let fixture: ComponentFixture<ListChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChildCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
