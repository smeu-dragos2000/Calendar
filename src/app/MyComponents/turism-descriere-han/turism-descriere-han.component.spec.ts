import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismDescriereHanComponent } from './turism-descriere-han.component';

describe('TurismDescriereHanComponent', () => {
  let component: TurismDescriereHanComponent;
  let fixture: ComponentFixture<TurismDescriereHanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismDescriereHanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismDescriereHanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
