import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../services/products.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonButtons,     // 👈 agregado
    IonMenuButton   // 👈 agregado
  ]
})
export class ProductDetailPage implements OnInit {
  product!: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }

  addToCart() {
    if (this.product) {
      this.productsService.addToCart(this.product);
      this.navCtrl.navigateForward('/cart');
    }
  }
}
