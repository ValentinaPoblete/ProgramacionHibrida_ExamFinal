import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAvisosPage } from './inicio-avisos.page';

describe('InicioAvisosPage', () => {
  let component: InicioAvisosPage;
  let fixture: ComponentFixture<InicioAvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
