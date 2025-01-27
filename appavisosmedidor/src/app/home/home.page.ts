import { Component, ViewChild } from '@angular/core';
import { IonIcon, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Aviso } from '../modelo/modelo-aviso';
import { addIcons } from 'ionicons';
import { ServicioListaService } from '../servicios/servicio-lista.service';
import { add, settingsOutline } from 'ionicons/icons';
import { ListaAvisosComponent } from "../componentes/lista-avisos/lista-avisos.component";
import { RouterModule } from '@angular/router';
import { ServicioBdService } from '../servicios/servicio-bd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ RouterModule, IonIcon, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, ListaAvisosComponent ],
})

export class HomePage {
  avisos: Aviso[] = [];

  constructor( private servicioLista: ServicioListaService,
               private dbService: ServicioBdService
   ) {
    addIcons({ add, settingsOutline });
  }

  async ngOnInit(): Promise<void> {
    await this.dbService.iniciarPlugin();
    this.avisos = await this.servicioLista.getAvisos();
  }

  async ngOnDestroy() {
    console.log("ListaDeComprasComponent::ngOnDestroy")    
    await this.dbService.cerrarConexion() 
  }

  async onEliminarAviso(id: number): Promise<void> {
    await this.servicioLista.eliminarAviso({ id } as Aviso);
    this.avisos = await this.servicioLista.getAvisos(); 
  }

  async getAvisos():Promise<Aviso[]> {
    return this.dbService.obtenerTodos()
  }

}
