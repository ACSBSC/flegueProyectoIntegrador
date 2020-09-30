import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeAnimoComponent } from './estado-de-animo.component';

describe('EstadoDeAnimoComponent', () => {
  let component: EstadoDeAnimoComponent;
  let fixture: ComponentFixture<EstadoDeAnimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeAnimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeAnimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
