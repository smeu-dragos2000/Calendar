import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismDescriereAnaComponent } from './turism-descriere-ana.component';

describe('TurismDescriereAnaComponent', () => {
  let component: TurismDescriereAnaComponent;
  let fixture: ComponentFixture<TurismDescriereAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismDescriereAnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurismDescriereAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
