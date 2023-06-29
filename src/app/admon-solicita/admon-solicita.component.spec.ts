import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmonSolicitaComponent } from './admon-solicita.component';

describe('AdmonSolicitaComponent', () => {
  let component: AdmonSolicitaComponent;
  let fixture: ComponentFixture<AdmonSolicitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmonSolicitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmonSolicitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
