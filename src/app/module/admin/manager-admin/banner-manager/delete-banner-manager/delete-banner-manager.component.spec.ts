import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBannerManagerComponent } from './delete-banner-manager.component';

describe('DeleteBannerManagerComponent', () => {
  let component: DeleteBannerManagerComponent;
  let fixture: ComponentFixture<DeleteBannerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBannerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBannerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
