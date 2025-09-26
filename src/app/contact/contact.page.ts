import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonLabel, IonInput, IonTextarea, IonButton,
    IonButtons, IonMenuButton,   // 👈 NECESARIOS PARA EL MENU
    CommonModule, FormsModule
  ]
})
export class ContactPage implements OnInit {

  nombre: string = '';
  correo: string = '';
  asunto: string = '';
  mensaje: string = '';

  constructor() {}

  ngOnInit() {}

  enviarFormulario() {
    if (!this.nombre || !this.correo || !this.mensaje) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }
    alert(`Gracias ${this.nombre}, hemos recibido tu mensaje ✅`);
    // Aquí podrías conectar con un backend o API
    this.nombre = '';
    this.correo = '';
    this.asunto = '';
    this.mensaje = '';
  }
}

