import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismHanComponent } from './turism-han.component';

describe('TurismHanComponent', () => {
  let component: TurismHanComponent;
  let fixture: ComponentFixture<TurismHanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismHanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismHanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
