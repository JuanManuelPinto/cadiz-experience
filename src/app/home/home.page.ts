import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgrupacionCardComponent } from '../components/agrupacion-card/agrupacion-card.component';
import { Agrupacion } from '../models/agrupacion';
import { HeaderComponent } from '../components/header/header.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, AgrupacionCardComponent, HeaderComponent, IonContent ]
})

export class HomePage {
  constructor() {}

  agrupaciones: Agrupacion[] = [
    {
      id: 1,
      nombre: 'Los Calaita',
      modalidad: 'Chirigota',
      autor: 'Alejandro Pérez Sánchez (Álex el Peluca)',
      anno: 2025,
      img: 'assets/img/agrupaciones/calaita.jpg',
      fecha_estreno: new Date('2025-01-24'),
      destacada: true
    },
    {
      id: 2,
      nombre: 'Los Chatarras',
      modalidad: 'Comparsa',
      autor: 'Hermanos Carapapa',
      anno: 2016,
      img: 'assets/img/agrupaciones/chatarras.jpg',
      fecha_estreno: new Date('2025-01-13'),
      destacada: true
    },
    {
      id: 3,
      nombre: 'Los Piratas',
      modalidad: 'Comparsa',
      autor: 'Antonio Martínez Ares',
      anno: 1998,
      img: 'assets/img/agrupaciones/piratas.jpg',
      fecha_estreno: new Date('1998-01-26'),
      destacada: false
    },
    {
      id: 4,
      nombre: 'Los Millonarios',
      modalidad: 'Comparsa',
      autor: 'Juan Carlos Aragón',
      anno: 2015,
      img: 'assets/img/agrupaciones/millonarios.jpg',
      fecha_estreno: new Date('2015-01-19'),
      destacada: false
    },
    {
      id: 5,
      nombre: 'Los Yesterday',
      modalidad: 'Chirigota',
      autor: 'Juan Manuel Braza Benítez (El Sheriff)',
      anno: 1999,
      img: 'assets/img/agrupaciones/yesterday.jpg',
      fecha_estreno: new Date('1999-01-18'),
      destacada: true
    },
    {
      id: 6,
      nombre: 'La Boda',
      modalidad: 'Coro',
      autor: 'Faly Pastrana',
      anno: 2009,
      img: 'assets/img/agrupaciones/boda.jpg',
      fecha_estreno: new Date('2009-01-19'),
      destacada: false
    }
  ];
}
