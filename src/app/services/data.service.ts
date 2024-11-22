import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private librosEndpoint = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private perroEndpoint = 'https://dog.ceo/api/breed/affenpinscher/images/random';

  async getLibros() {
    const response = await axios.get(this.librosEndpoint);
    return response.data.results; // Devuelve la lista de libros
  }

  async getRobotImage(id: string) {
    return `https://robohash.org/${id}`; // Genera una URL con el ID
  }

  async getPerroImage() {
    const response = await axios.get(this.perroEndpoint);
    return response.data.message; // Devuelve la URL de la imagen del perro
  }
}
