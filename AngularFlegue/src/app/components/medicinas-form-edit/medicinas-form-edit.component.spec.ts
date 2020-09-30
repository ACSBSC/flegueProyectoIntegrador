import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinasFormEditComponent } from './medicinas-form-edit.component';

describe('MedicinasFormEditComponent', () => {
  let component: MedicinasFormEditComponent;
  let fixture: ComponentFixture<MedicinasFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinasFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinasFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
