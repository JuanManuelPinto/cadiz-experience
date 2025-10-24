import { Component, Input } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion';
import { CommonModule, DatePipe } from '@angular/common';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonText, IonBadge, IonButton, IonImg, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eye, eyeOutline } from 'ionicons/icons'; 

@Component({
  selector: 'app-agrupacion-card',
  templateUrl: './agrupacion-card.component.html',
  styleUrls: ['./agrupacion-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonImg, IonButton, CommonModule, DatePipe, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonText, IonBadge]
})
export class AgrupacionCardComponent {

  @Input() agrupacion?: Agrupacion;

  constructor() {
    addIcons({ eyeOutline });
  }

}
