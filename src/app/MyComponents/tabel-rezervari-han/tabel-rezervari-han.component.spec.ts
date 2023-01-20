import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelRezervariHanComponent } from './tabel-rezervari-han.component';

describe('TabelRezervariHanComponent', () => {
  let component: TabelRezervariHanComponent;
  let fixture: ComponentFixture<TabelRezervariHanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelRezervariHanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelRezervariHanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
