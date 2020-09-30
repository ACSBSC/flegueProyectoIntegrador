import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignosVitalesHistorialComponent } from './signos-vitales-historial.component';

describe('SignosVitalesHistorialComponent', () => {
  let component: SignosVitalesHistorialComponent;
  let fixture: ComponentFixture<SignosVitalesHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignosVitalesHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignosVitalesHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
