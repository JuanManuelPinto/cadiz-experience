import { Component, Input } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion';
import { CommonModule, DatePipe } from '@angular/common';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonText, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agrupacion-card',
  templateUrl: './agrupacion-card.component.html',
  styleUrls: ['./agrupacion-card.component.scss'],
  standalone: true,
  imports: [CommonModule, DatePipe, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonText, IonBadge]
})
export class AgrupacionCardComponent {

  @Input() agrupacion?: Agrupacion;

  constructor() { }

}
