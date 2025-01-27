import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormularioAvisosComponent } from './formulario-avisos.component';

describe('FormularioAvisosComponent', () => {
  let component: FormularioAvisosComponent;
  let fixture: ComponentFixture<FormularioAvisosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormularioAvisosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
