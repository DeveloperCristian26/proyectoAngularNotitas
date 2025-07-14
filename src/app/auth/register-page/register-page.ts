import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {
  nombre = '';
  correo = '';
  contrasena = '';
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  onRegister() {
    this.api
      .registrar(this.nombre, this.correo, this.contrasena)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/login']); // Redirige a las notas
      })
      .catch((err) => {
        this.error = err.response?.data?.msg || 'Error al registrarse';
      });
  }
}
