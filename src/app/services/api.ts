import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'http://localhost:3000/api';

  login(correo: string, contrasena: string) {
    return axios.post(`${this.BASE_URL}/auth/login`, { correo, contrasena });
  }

  registrar(nombre: string, correo: string, contrasena: string) {
    return axios.post(`${this.BASE_URL}/auth/registrar`, {
      nombre,
      correo,
      contrasena,
    });
  }

  obtenerNotas() {
    return axios.get(`${this.BASE_URL}/notas`);
  }

  obtenerNota(id: string) {
    return axios.get(`${this.BASE_URL}/notas/${id}`);
  }

  crearNota(titulo: string, nota: string) {
    return axios.post(
      `${this.BASE_URL}/nota`,
      { titulo, nota },
      { headers: this.tokenHeader() }
    );
  }

  actualizarNota(id: string, titulo: string, nota: string) {
    return axios.put(
      `${this.BASE_URL}/notas/${id}`,
      { titulo, nota },
      { headers: this.tokenHeader() }
    );
  }

  eliminarNota(id: string) {
    return axios.delete(`${this.BASE_URL}/notas/${id}`, {
      headers: this.tokenHeader(),
    });
  }

  private tokenHeader() {
    const token = localStorage.getItem('token');
    return { 'x-auth-token': token || '' };
  }
}
