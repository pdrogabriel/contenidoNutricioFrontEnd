import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColacionmatutinaComponent } from './colacionmatutina.component';

describe('ColacionmatutinaComponent', () => {
  let component: ColacionmatutinaComponent;
  let fixture: ComponentFixture<ColacionmatutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColacionmatutinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColacionmatutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
