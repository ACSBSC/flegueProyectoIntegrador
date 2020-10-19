import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCuidadorComponent } from './resumen-cuidador.component';

describe('ResumenCuidadorComponent', () => {
  let component: ResumenCuidadorComponent;
  let fixture: ComponentFixture<ResumenCuidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
