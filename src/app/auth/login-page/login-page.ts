import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  correo = '';
  contrasena = '';
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  onLogin() {
    this.api
      .login(this.correo, this.contrasena)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/notas']);
      })
      .catch((err) => {
        this.error = err.response?.data.msg || 'error al iniciar sesion';
      });
  }
}
