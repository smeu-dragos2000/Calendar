import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelRezervariAnaComponent } from './tabel-rezervari-ana.component';

describe('TabelRezervariComponent', () => {
  let component: TabelRezervariAnaComponent;
  let fixture: ComponentFixture<TabelRezervariAnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelRezervariAnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelRezervariAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
