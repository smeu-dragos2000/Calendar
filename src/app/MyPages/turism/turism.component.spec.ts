import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismComponent } from './turism.component';

describe('TurismComponent', () => {
  let component: TurismComponent;
  let fixture: ComponentFixture<TurismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
