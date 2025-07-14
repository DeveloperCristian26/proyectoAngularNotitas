import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-form-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nota-form-page.html',
  styleUrls: ['./nota-form-page.scss'], // ← corregido: styleUrl → styleUrls
})
export class NotaFormPage {
  titulo = '';
  nota = '';
  error = '';

  constructor(private api: ApiService, private router: Router) {}

  crearNota() {
    this.api
      .crearNota(this.titulo, this.nota)
      .then(() => {
        this.router.navigate(['/notas']);
      })
      .catch((err) => {
        this.error = err?.error?.message || 'Error al guardar la nota';
      });
  }
}
