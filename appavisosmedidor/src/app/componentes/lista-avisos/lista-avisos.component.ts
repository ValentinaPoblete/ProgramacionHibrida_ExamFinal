import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addIcons } from 'ionicons';
import { trashSharp } from 'ionicons/icons';
import { Aviso } from 'src/app/modelo/modelo-aviso';
import { IonList, IonItem, IonLabel, IonIcon, IonImg } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss'],
  standalone: true,
  imports: [ IonImg,  CommonModule, IonList, IonItem, IonLabel, IonIcon ]
})

export class ListaAvisosComponent  implements OnInit {
  
  @Input() avisos: Aviso [] = []
  @Output() eliminarAviso = new EventEmitter<number>()  

  constructor() {
    addIcons({trashSharp});
   }

  ngOnInit() {}

  onEliminar(id: number): void {
    this.eliminarAviso.emit(id)
  }
  
}
