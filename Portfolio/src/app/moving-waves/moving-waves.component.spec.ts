import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingWavesComponent } from './moving-waves.component';

describe('MovingWavesComponent', () => {
  let component: MovingWavesComponent;
  let fixture: ComponentFixture<MovingWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingWavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
