import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Aviso } from 'src/app/modelo/modelo-aviso';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonImg, IonIcon } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType } from '@capacitor/camera';
import { add, cameraOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-formulario-avisos',
  templateUrl: './formulario-avisos.component.html',
  styleUrls: ['./formulario-avisos.component.scss'],
  standalone: true,
  imports: [ IonIcon, IonImg,  CommonModule, IonText,  FormsModule, IonItem, IonLabel, IonInput, IonTextarea, IonButton ]
})
export class FormularioAvisosComponent implements OnInit {
  aviso: Aviso = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    imagen: ''
  }

  @Output() guardarAviso = new EventEmitter<Aviso>();

  constructor() {
    addIcons({cameraOutline,add});
   }

  ngOnInit() {}

  onSubmit(): void {
    this.guardarAviso.emit(this.aviso)
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })
    
    const imagenBase64 = image.base64String
    this.aviso.imagen = imagenBase64;

  }
  
}
