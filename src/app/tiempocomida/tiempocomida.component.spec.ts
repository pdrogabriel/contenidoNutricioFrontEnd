import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempocomidaComponent } from './tiempocomida.component';

describe('TiempocomidaComponent', () => {
  let component: TiempocomidaComponent;
  let fixture: ComponentFixture<TiempocomidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempocomidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempocomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
