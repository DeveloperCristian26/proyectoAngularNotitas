import { Routes } from '@angular/router';
import { LoginPage } from './auth/login-page/login-page';
import { RegisterPage } from './auth/register-page/register-page';
import { NotasListPage } from './notas/notas-list-page/notas-list-page';
import { NotaFormPage } from './notas/nota-form-page/nota-form-page';
import { NotaDetallePage } from './notas/nota-detalle-page/nota-detalle-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'notas', component: NotasListPage },
  { path: 'notas/nueva', component: NotaFormPage },
  { path: 'notas/:id', component: NotaDetallePage },
];
