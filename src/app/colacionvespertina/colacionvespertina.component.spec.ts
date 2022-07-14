import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColacionvespertinaComponent } from './colacionvespertina.component';

describe('ColacionvespertinaComponent', () => {
  let component: ColacionvespertinaComponent;
  let fixture: ComponentFixture<ColacionvespertinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColacionvespertinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColacionvespertinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
