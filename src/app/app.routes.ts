import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },

  { path: 'products-list', loadComponent: () => import('./products-list/products-list.page').then(m => m.ProductsListPage) },

  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },

  { path: 'create-account', loadComponent: () => import('./create-account/create-account.page').then(m => m.CreateAccountPage) },

  { path: 'profile', loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage) },

  {
    path: 'product-detail/:id',
    loadComponent: () => import('./product-detail/product-detail.page').then(m => m.ProductDetailPage)
  },

  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then(m => m.CartPage)
  },

  // 👇 Ruta raíz para redirigir a products-list
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  }
];
