import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';



export interface Product {
  _id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    
    {
  _id: 1,
  name: 'Cerveza Corona',
  description: 'Refrescante cerveza mexicana, perfecta para disfrutar bien fría en cualquier ocasión.',
  price: 25,
  image: 'assets/img/CORONA.jpg'
},
{
  _id: 2,
  name: 'Doritos',
  description: 'Crujientes totopos de maíz con intenso sabor a queso, ideales para botanear.',
  price: 80,
  image: 'assets/img/DORITOS.jpg'
},
{
  _id: 3,
  name: 'Cerveza Modelo',
  description: 'Cerveza mexicana de sabor suave y balanceado, reconocida mundialmente.',
  price: 90,
  image: 'assets/img/MODELO.jpg'
},
{
  _id: 4,
  name: 'Pulparindo',
  description: 'Dulce típico mexicano de tamarindo con un toque de picante y ácido.',
  price: 10,
  image: 'assets/img/PULPARINDO.jpg'
},
{
  _id: 5,
  name: 'Sabritas',
  description: 'Papas fritas clásicas con el auténtico sabor crujiente que encanta a todos.',
  price: 100,
  image: 'assets/img/SABRITAS.jpg'
},
{
  _id: 6,
  name: 'Salsa Valentina',
  description: 'Salsa picante tradicional mexicana, ideal para acompañar botanas y comidas.',
  price: 40,
  image: 'assets/img/VALENTINA.jpg'
},
{
  _id: 7,
  name: 'Tortillas de Maiz',
  description: 'Tortillas frescas de maíz, base esencial de la gastronomía mexicana.',
  price: 30,
  image: 'assets/img/TORTILLAS.jpg'
},
{
  _id: 8,
  name: 'Coca-Cola',
  description: 'Refresco clásico con el sabor inconfundible que acompaña cualquier comida.',
  price: 25,
  image: 'assets/img/COCACOLA.jpg'
},
{
  _id: 9,
  name: 'Chile',
  description: 'Chiles frescos llenos de sabor y picante, protagonistas en la cocina mexicana.',
  price: 60,
  image: 'assets/img/CHILE.png'
},
{
  _id: 10,
  name: 'Nachos',
  description: 'Totopos de maíz crujientes, perfectos para acompañar con queso o guacamole.',
  price: 50,
  image: 'assets/img/NACHOS.jpg'
}




  ];

  private cart: Product[] = [];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p._id === id);
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p._id !== productId);
  }

  clearCart() {
    this.cart = [];
  }
}
