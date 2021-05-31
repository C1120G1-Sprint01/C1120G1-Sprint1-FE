import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitAdminComponent } from './wait-admin.component';

describe('WaitAdminComponent', () => {
  let component: WaitAdminComponent;
  let fixture: ComponentFixture<WaitAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
