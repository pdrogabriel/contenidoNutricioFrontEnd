import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmonAdminComponent } from './admon-admin.component';

describe('AdmonAdminComponent', () => {
  let component: AdmonAdminComponent;
  let fixture: ComponentFixture<AdmonAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmonAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
