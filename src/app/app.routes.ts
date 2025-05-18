import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';




export const routes: Routes = [
      {
         path: "",
         redirectTo: "main",
         pathMatch: "full"
      },
     {
        path: "main",
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
     },
     {
        path: "menu",
        loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent)
     },
    {
        path: "contact",
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    },
   {
      path: "cart",
      loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
   }

];
 