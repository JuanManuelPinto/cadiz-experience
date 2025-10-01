import { Component, Input } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-agrupacion-card',
  templateUrl: './agrupacion-card.component.html',
  styleUrls: ['./agrupacion-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, DatePipe]
})
export class AgrupacionCardComponent {

  @Input() agrupacion!: Agrupacion;

  constructor() { }

}
