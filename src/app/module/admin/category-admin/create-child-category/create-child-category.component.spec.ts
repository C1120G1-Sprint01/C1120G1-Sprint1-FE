import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChildCategoryComponent } from './create-child-category.component';

describe('CreateChildCategoryComponent', () => {
  let component: CreateChildCategoryComponent;
  let fixture: ComponentFixture<CreateChildCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChildCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChildCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
