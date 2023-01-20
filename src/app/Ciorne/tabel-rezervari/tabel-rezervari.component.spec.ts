import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelRezervariComponent } from './tabel-rezervari.component';

describe('TabelRezervariComponent', () => {
  let component: TabelRezervariComponent;
  let fixture: ComponentFixture<TabelRezervariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelRezervariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelRezervariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
