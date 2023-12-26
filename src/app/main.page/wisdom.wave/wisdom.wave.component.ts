import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'main-page-wisdom-wawe',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './wisdom.wave.component.html',
  styleUrl: './wisdom.wave.component.scss'
})
export class MainPageWisdomWawe {
    
}
