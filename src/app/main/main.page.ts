import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { RouterModule } from '@angular/router'; 

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  standalone: true,
  imports: [IonicModule, RouterModule], 
})
export class MainPage {

  constructor(private navCtrl: NavController) {}

  logout() {
    
    this.navCtrl.navigateRoot('/login');
  }
}