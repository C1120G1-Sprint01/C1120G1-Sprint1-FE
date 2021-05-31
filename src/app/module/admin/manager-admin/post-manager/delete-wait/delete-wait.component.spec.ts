import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWaitComponent } from './delete-wait.component';

describe('DeleteWaitComponent', () => {
  let component: DeleteWaitComponent;
  let fixture: ComponentFixture<DeleteWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
