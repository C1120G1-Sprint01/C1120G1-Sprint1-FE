import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
=======
<<<<<<< HEAD:src/app/module/admin/category-admin/create-category/create-category.component.spec.ts
import { CreateCategoryComponent } from './create-category.component';

describe('CreateCategoryComponent', () => {
  let component: CreateCategoryComponent;
  let fixture: ComponentFixture<CreateCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCategoryComponent ]
=======
>>>>>>> 2d556929a908842a1fdfdfc3b454c598c9156338
import { StatisticsCustomerComponent } from './statistics-customer.component';

describe('StatisticsCustomerComponent', () => {
  let component: StatisticsCustomerComponent;
  let fixture: ComponentFixture<StatisticsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsCustomerComponent ]
<<<<<<< HEAD
=======
>>>>>>> 2d556929a908842a1fdfdfc3b454c598c9156338:src/app/module/customer/manager-customer/statistics-customer/statistics-customer.component.spec.ts
>>>>>>> 2d556929a908842a1fdfdfc3b454c598c9156338
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD
    fixture = TestBed.createComponent(StatisticsCustomerComponent);
=======
<<<<<<< HEAD:src/app/module/admin/category-admin/create-category/create-category.component.spec.ts
    fixture = TestBed.createComponent(CreateCategoryComponent);
=======
    fixture = TestBed.createComponent(StatisticsCustomerComponent);
>>>>>>> 2d556929a908842a1fdfdfc3b454c598c9156338:src/app/module/customer/manager-customer/statistics-customer/statistics-customer.component.spec.ts
>>>>>>> 2d556929a908842a1fdfdfc3b454c598c9156338
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
