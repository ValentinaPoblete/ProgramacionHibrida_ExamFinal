import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarAvisosPage } from './agregar-avisos.page';

describe('AgregarAvisosPage', () => {
  let component: AgregarAvisosPage;
  let fixture: ComponentFixture<AgregarAvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
