import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonList,
  IonListHeader,
  IonItem,
  IonThumbnail,
  IonLabel
} from '@ionic/angular/standalone';

import { Product, ProductsService } from '../services/products.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  standalone: true, // 🚀 standalone obligatorio
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonList,
    IonListHeader,
    IonItem,
    IonThumbnail,
    IonLabel
  ]
})
export class ProductsListPage implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  openProduct(productId: number) {
    this.navCtrl.navigateForward(`/product-detail/${productId}`);
  }
}

