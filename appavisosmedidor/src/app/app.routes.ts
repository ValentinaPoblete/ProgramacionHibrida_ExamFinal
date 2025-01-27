import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'inicio-avisos',
    loadComponent: () => import('./paginas/inicio-avisos/inicio-avisos.page').then( m => m.InicioAvisosPage)
  },
  {
    path: 'agregar-avisos',
    loadComponent: () => import('./paginas/agregar-avisos/agregar-avisos.page').then( m => m.AgregarAvisosPage)
  },
];
