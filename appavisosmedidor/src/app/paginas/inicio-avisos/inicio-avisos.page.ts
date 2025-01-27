import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Aviso } from 'src/app/modelo/modelo-aviso';
import { ServicioListaService } from 'src/app/servicios/servicio-lista.service';
import { ListaAvisosComponent } from "../../componentes/lista-avisos/lista-avisos.component";

@Component({
  selector: 'app-inicio-avisos',
  templateUrl: './inicio-avisos.page.html',
  styleUrls: ['./inicio-avisos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, ListaAvisosComponent]
})
export class InicioAvisosPage implements OnInit {
  avisos: Aviso[] = []

  constructor(private servicioLista: ServicioListaService) { }

  async ngOnInit(): Promise<void> {
    this.avisos = await this.servicioLista.getAvisos(); 
  }

  async ionViewWillEnter(): Promise<void> {
    this.avisos = await this.servicioLista.getAvisos(); 
  }

  async eliminarAviso(id: number): Promise<void> {
    await this.servicioLista.eliminarAviso({ id } as Aviso);
    this.avisos = await this.servicioLista.getAvisos();
  }

}
