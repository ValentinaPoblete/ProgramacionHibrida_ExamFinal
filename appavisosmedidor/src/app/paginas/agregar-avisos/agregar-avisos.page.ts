import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ServicioListaService } from 'src/app/servicios/servicio-lista.service';
import { Aviso } from 'src/app/modelo/modelo-aviso';
import { FormularioAvisosComponent } from "../../componentes/formulario-avisos/formulario-avisos.component";

@Component({
  selector: 'app-agregar-avisos',
  templateUrl: './agregar-avisos.page.html',
  styleUrls: ['./agregar-avisos.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormularioAvisosComponent]
})
export class AgregarAvisosPage implements OnInit {

  constructor(private servicioLista: ServicioListaService) { }

  agregarAviso(aviso: Aviso): void {
    this.servicioLista.agregarAviso(aviso)
  }

  ngOnInit() {
  }

}
