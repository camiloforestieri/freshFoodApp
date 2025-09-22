import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule]
})
export class LoginPage {

  correo = '';
  password = '';

  constructor(private auth: AuthService, private navCtrl: NavController) {}

  login() {
    const data = {
      correo: this.correo,
      password: this.password
    };

    this.auth.login(data).subscribe(res => {
      if (res.success) {
        alert("Bienvenido!");
        this.navCtrl.navigateRoot('/main'); 
      } else {
        alert(res.message);
      }
    });
  }
}














