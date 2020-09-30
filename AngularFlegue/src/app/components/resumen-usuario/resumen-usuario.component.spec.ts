import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenUsuarioComponent } from './resumen-usuario.component';

describe('ResumenUsuarioComponent', () => {
  let component: ResumenUsuarioComponent;
  let fixture: ComponentFixture<ResumenUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
