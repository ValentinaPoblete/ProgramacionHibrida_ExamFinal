import { Injectable } from '@angular/core';
import { Aviso } from '../modelo/modelo-aviso';
import { ServicioBdService } from './servicio-bd.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioListaService {

  constructor(
    private dbService: ServicioBdService
  ) { }

  async getAvisos():Promise<Aviso[]> {
    return this.dbService.obtenerTodos()
  }

  async agregarAviso(aviso:Aviso) {
    this.dbService.insertarAviso(aviso)    
  }

  async eliminarAviso(aviso:Aviso) {
    if( aviso.id != undefined && aviso.id > 0 ) {
      await this.dbService.eliminar(aviso.id)
    }    
  }

}
