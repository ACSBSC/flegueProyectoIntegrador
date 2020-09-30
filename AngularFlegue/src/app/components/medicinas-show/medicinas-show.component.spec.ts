import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinasShowComponent } from './medicinas-show.component';

describe('MedicinasShowComponent', () => {
  let component: MedicinasShowComponent;
  let fixture: ComponentFixture<MedicinasShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinasShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinasShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
