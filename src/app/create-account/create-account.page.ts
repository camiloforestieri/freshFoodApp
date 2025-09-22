import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CreateAccountPage {

  nombre = '';
  apellido = '';
  correo = '';
  password = '';
  confirmar = '';

  constructor(private auth: AuthService, public navCtrl: NavController) {}

crearCuenta() {
  if (this.password !== this.confirmar) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const data = {
    nombre: this.nombre,
    apellido: this.apellido,
    correo: this.correo,
    password: this.password
  };

  console.log("Enviando al backend:", data);

  this.auth.register(data).subscribe(res => {
    console.log("Respuesta backend:", res);

    if (res.success) {
      alert("Cuenta creada con éxito");
      this.navCtrl.navigateRoot('/login'); // Redirige a login
    } else {
      alert("Error: " + res.message);
    }
  });
}


}