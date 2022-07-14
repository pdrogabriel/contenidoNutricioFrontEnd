import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentradoComponent } from './concentrado.component';

describe('ConcentradoComponent', () => {
  let component: ConcentradoComponent;
  let fixture: ComponentFixture<ConcentradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
