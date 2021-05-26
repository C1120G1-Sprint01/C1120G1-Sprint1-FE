import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBannerManagerComponent } from './list-banner-manager.component';

describe('ListBannerManagerComponent', () => {
  let component: ListBannerManagerComponent;
  let fixture: ComponentFixture<ListBannerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBannerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBannerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
