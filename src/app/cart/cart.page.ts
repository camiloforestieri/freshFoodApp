import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importamos los standalone de Ionic que se usan en el HTML
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

import { ProductsService, Product } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonButtons,
    IonMenuButton
  ]
})
export class CartPage implements OnInit {
  cart: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.cart = this.productsService.getCart();
  }

  remove(productId: number) {
    this.productsService.removeFromCart(productId);
    this.cart = this.productsService.getCart();
  }

  clear() {
    this.productsService.clearCart();
    this.cart = [];
  }
}


