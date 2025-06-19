import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-nota-detalle-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nota-detalle-page.html',
  styleUrl: './nota-detalle-page.scss',
})
export class NotaDetallePage implements OnInit {
  nota: any = null;
  error = '';
  id = '';

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.api
      .obtenerNota(this.id)
      .then((res) => {
        this.nota = res.data;
      })
      .catch((err) => {
        this.error = 'Error al cargar la nota';
      });
  }

  actualizar() {
    this.api
      .actualizarNota(this.id, this.nota.titulo, this.nota.nota)
      .then(() => this.router.navigate(['/notas']))
      .catch(() => {
        this.error = 'Error al actualizar la nota';
      });
  }

  eliminar() {
    if (confirm('¿Estás segura de que quieres eliminar esta nota?')) {
      this.api
        .eliminarNota(this.id)
        .then(() => this.router.navigate(['/notas']))
        .catch(() => {
          this.error = 'Error al eliminar la nota';
        });
    }
  }
}
