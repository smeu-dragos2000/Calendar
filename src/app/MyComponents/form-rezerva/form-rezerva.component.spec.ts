import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRezervaComponent } from './form-rezerva.component';

describe('FormRezervaComponent', () => {
  let component: FormRezervaComponent;
  let fixture: ComponentFixture<FormRezervaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRezervaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRezervaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
