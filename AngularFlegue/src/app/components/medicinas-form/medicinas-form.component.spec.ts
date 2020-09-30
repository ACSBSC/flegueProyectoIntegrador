import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinasFormComponent } from './medicinas-form.component';

describe('MedicinasFormComponent', () => {
  let component: MedicinasFormComponent;
  let fixture: ComponentFixture<MedicinasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
