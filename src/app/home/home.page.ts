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
  imports: [CommonModule, AgrupacionCardComponent, HeaderComponent, IonContent]
})

export class HomePage {
  constructor() { }

  agrupaciones: Agrupacion[] = [
    {
      id: 11,
      nombre: 'No tenemos el Congo pa farolillos',
      modalidad: 'Chirigota',
      autor: 'José Antonio Vera Luque',
      anno: 2018,
      img: 'assets/img/agrupaciones/congo.jpg',
      fecha_estreno: new Date('2018-01-25'),
      destacada: true
    },
    {
      id: 4,
      nombre: 'Los Millonarios',
      modalidad: 'Comparsa',
      autor: 'Juan Carlos Aragón Becerra',
      anno: 2015,
      img: 'assets/img/agrupaciones/millonarios.jpg',
      fecha_estreno: new Date('2015-01-19'),
      destacada: true
    },
    {
      id: 17,
      nombre: 'Los Colgaos',
      modalidad: 'Comparsa',
      autor: 'Miguel Ángel García Argüez (El Chapa)',
      anno: 2024,
      img: 'assets/img/agrupaciones/colgaos.jpg',
      fecha_estreno: new Date('2024-01-22'),
      destacada: false
    },
    {
      id: 1,
      nombre: 'Los Calaíta',
      modalidad: 'Chirigota',
      autor: 'Alejandro Pérez Sánchez (Álex el Peluca)',
      anno: 2025,
      img: 'assets/img/agrupaciones/calaita.jpg',
      fecha_estreno: new Date('2025-01-24'),
      destacada: true
    },
    {
      id: 15,
      nombre: 'La Chusma Selecta',
      modalidad: 'Comparsa',
      autor: 'Antonio Martínez Ares',
      anno: 2020,
      img: 'assets/img/agrupaciones/chusma_selecta.jpg',
      fecha_estreno: new Date('2020-01-28'),
      destacada: false
    },
    {
      id: 8,
      nombre: 'Araka la Kana',
      modalidad: 'Comparsa',
      autor: 'Juan Carlos Aragón Becerra',
      anno: 2007,
      img: 'assets/img/agrupaciones/araka_la_kana.jpg',
      fecha_estreno: new Date('2007-01-20'),
      destacada: true
    },
    {
      id: 13,
      nombre: 'El Gallinero',
      modalidad: 'Coro',
      autor: 'Julio Pardo',
      anno: 2025,
      img: 'assets/img/agrupaciones/gallinero.webp',
      fecha_estreno: new Date('2025-01-28'),
      destacada: true
    },
    {
      id: 18,
      nombre: 'Los Borrachos',
      modalidad: 'Chirigota',
      autor: 'José Luis García Cossío (El Selu)',
      anno: 1992,
      img: 'assets/img/agrupaciones/borrachos.jpg',
      fecha_estreno: new Date('1992-01-27'),
      destacada: false
    },
    {
      id: 3,
      nombre: 'Los Piratas',
      modalidad: 'Comparsa',
      autor: 'Antonio Martínez Ares',
      anno: 1998,
      img: 'assets/img/agrupaciones/piratas.jpg',
      fecha_estreno: new Date('1998-01-26'),
      destacada: true
    },
    {
      id: 10,
      nombre: 'Si me pongo pesao me lo dices',
      modalidad: 'Chirigota',
      autor: 'José Luis García Cossío (El Selu)',
      anno: 2016,
      img: 'assets/img/agrupaciones/si_me_pongo_pesao.jpeg',
      fecha_estreno: new Date('2016-01-21'),
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
    },
    {
      id: 9,
      nombre: 'Los Irracionales',
      modalidad: 'Comparsa',
      autor: 'Jesús Bienvenido Saucedo',
      anno: 2017,
      img: 'assets/img/agrupaciones/irracionales.jpeg',
      fecha_estreno: new Date('2017-01-21'),
      destacada: true
    },
    {
      id: 16,
      nombre: 'El Perro Andalú',
      modalidad: 'Comparsa',
      autor: 'Antonio Martínez Ares',
      anno: 2018,
      img: 'assets/img/agrupaciones/perro_andalu.jpeg',
      fecha_estreno: new Date('2018-01-24'),
      destacada: false
    },
    {
      id: 2,
      nombre: 'Los Duendes Coloraos',
      modalidad: 'Comparsa',
      autor: 'Hermanos Carapapa',
      anno: 2012,
      img: 'assets/img/agrupaciones/duendes_coloraos.jfif',
      fecha_estreno: new Date('2012-01-23'),
      destacada: true
    },
    {
      id: 7,
      nombre: 'Los Cobardes',
      modalidad: 'Comparsa',
      autor: 'Antonio Martínez Ares',
      anno: 2016,
      img: 'assets/img/agrupaciones/cobardes.jpeg',
      fecha_estreno: new Date('2016-01-23'),
      destacada: true
    },
    {
      id: 14,
      nombre: 'Ku Kux Klan Klan',
      modalidad: 'Cuarteto',
      autor: 'Miguel Ángel Moreno Gómez',
      anno: 2025,
      img: 'assets/img/agrupaciones/ku_kux_klan.jpg',
      fecha_estreno: new Date('2025-01-27'),
      destacada: true
    },
    {
      id: 12,
      nombre: 'Una chirigota con clase',
      modalidad: 'Chirigota',
      autor: 'José Luis Ballesteros Castro (El Love)',
      anno: 1996,
      img: 'assets/img/agrupaciones/clase.jpg',
      fecha_estreno: new Date('1996-01-29'),
      destacada: true
    },
    {
      id: 5,
      nombre: 'Los Yesterday',
      modalidad: 'Chirigota',
      autor: 'Juan Carlos Aragón Becerra',
      anno: 1999,
      img: 'assets/img/agrupaciones/yesterday.jpg',
      fecha_estreno: new Date('1999-01-18'),
      destacada: true
    },
  ];
}
