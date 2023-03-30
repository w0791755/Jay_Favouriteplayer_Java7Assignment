import { Component } from '@angular/core';
import { playerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'favorite-player';

  featuredplayer: any;

  constructor(private playerService: playerService) {}

  ngOnInit() {
    this.playerService.getplayerById(1).subscribe((player: any) => {
      this.featuredplayer = player;
    });
  }
}