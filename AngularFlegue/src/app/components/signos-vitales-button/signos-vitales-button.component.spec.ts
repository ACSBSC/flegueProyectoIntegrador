import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignosVitalesButtonComponent } from './signos-vitales-button.component';

describe('SignosVitalesButtonComponent', () => {
  let component: SignosVitalesButtonComponent;
  let fixture: ComponentFixture<SignosVitalesButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignosVitalesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignosVitalesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
