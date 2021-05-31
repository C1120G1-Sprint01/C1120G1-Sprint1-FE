import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWaitComponent } from './confirm-wait.component';

describe('ConfirmWaitComponent', () => {
  let component: ConfirmWaitComponent;
  let fixture: ComponentFixture<ConfirmWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
