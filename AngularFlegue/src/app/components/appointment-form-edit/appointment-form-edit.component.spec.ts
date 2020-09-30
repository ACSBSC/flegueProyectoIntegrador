import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFormEditComponent } from './appointment-form-edit.component';

describe('AppointmentFormEditComponent', () => {
  let component: AppointmentFormEditComponent;
  let fixture: ComponentFixture<AppointmentFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
