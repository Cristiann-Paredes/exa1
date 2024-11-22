import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: any[] = []; 

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    try {
      
      const libros = await this.dataService.getLibros();

      for (const libro of libros) {
        const isRobot = Math.random() > 0.5; 
        const image = isRobot
          ? await this.dataService.getRobotImage(libro.id.toString()) // Imagen del robot
          : await this.dataService.getPerroImage(); // Imagen del perro

        
        this.items.push({ titulo: libro.title, imagen: image });
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  
  saveToFirebase(item: any) {
    console.log('Guardando en Firebase:', item);
    alert('Elemento guardado exitosamente.');
  }
}
