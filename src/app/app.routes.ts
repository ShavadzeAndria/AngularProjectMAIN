import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';




export const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path:'main',component:MainComponent},
    {path:'menu',component:MenuComponent}

   //   {
   //      path: "main",
   //      loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
   //   },
   //   {
   //      path: "menu",
   //      loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent)
   //   },

];
 