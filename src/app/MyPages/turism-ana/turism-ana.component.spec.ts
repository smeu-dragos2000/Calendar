import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismAnaComponent } from './turism-ana.component';

describe('TurismAnaComponent', () => {
  let component: TurismAnaComponent;
  let fixture: ComponentFixture<TurismAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismAnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
