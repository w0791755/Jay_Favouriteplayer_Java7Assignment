import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent {
  @Input() player: Content | undefined;
  public isCurrentSelectedplayer = false;

  constructor() {}

  onPress() {
    console.log('button pressed');
    console.log(this.player?.id, this.player?.title);
  }
}