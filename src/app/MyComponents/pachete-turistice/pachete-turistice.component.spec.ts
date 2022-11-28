import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacheteTuristiceComponent } from './pachete-turistice.component';

describe('PacheteTuristiceComponent', () => {
  let component: PacheteTuristiceComponent;
  let fixture: ComponentFixture<PacheteTuristiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacheteTuristiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacheteTuristiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
