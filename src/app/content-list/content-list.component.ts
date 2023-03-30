import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { playerService } from '../player.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  player: Content[] = [];
  featuredplayer: Content = {} as Content;
  public isAvailable = false;
  public searchTerm = '';

  constructor(private playerservice: playerService) {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.playerservice.getplayer().subscribe((player: Content[]) => {
      this.player = player;
    });
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onContentAdded(newContent: Content) {
    this.playerservice.addplayer(newContent).subscribe((player) => {
      this.player.push(player);
    });
  }

  updateContent(updatedContent: Content) {
    this.playerservice.updateplayer(updatedContent).subscribe((updatedplayer: Content) => {
      const index = this.player.findIndex(
        (player) => player.id === updatedplayer.id
      );
      this.player[index] = updatedplayer;
    });
  }

  searchContent() {
    console.log(this.searchTerm);
    this.player.forEach((player) => {
      if (player.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}