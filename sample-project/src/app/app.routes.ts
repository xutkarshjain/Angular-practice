import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page1',
    loadComponent: () => import('../page1/page1').then((m) => m.Page1),
  },
  {
    path: 'page2',
    loadComponent: () => import('../page2/page2').then((m) => m.Page2),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../dashboard/dashboard').then((c) => c.Dashboard),
  },
];
