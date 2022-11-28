import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractiiTuristiceComponent } from './atractii-turistice.component';

describe('AtractiiTuristiceComponent', () => {
  let component: AtractiiTuristiceComponent;
  let fixture: ComponentFixture<AtractiiTuristiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtractiiTuristiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtractiiTuristiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
