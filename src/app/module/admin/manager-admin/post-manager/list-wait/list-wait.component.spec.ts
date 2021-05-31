import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaitComponent } from './list-wait.component';

describe('ListWaitComponent', () => {
  let component: ListWaitComponent;
  let fixture: ComponentFixture<ListWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
