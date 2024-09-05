import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { SecureComponent } from './secure/secure.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: SecureComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
