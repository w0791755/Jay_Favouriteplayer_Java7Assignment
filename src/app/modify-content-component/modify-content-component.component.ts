import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css'],
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();
  @Input() player: Content[] = [];
  @Input() currentContent: Content | undefined;

  constructor() {}

  updatedContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: [],
    player: '',
  };

  setCurrentplayer(id: number) {
    console.log('click');
    const player= this.player.find((player) => player.id === id);
    if (player) {
      this.currentContent = player;
    }
  }

  addContent() {
    const clonedContent = Object.assign({}, this.updatedContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    this.updatedContentAdded.emit(clonedContent);
    this.updatedContent = {
      id: 0,
      title: '',
      description: '',
      imgURL: '',
      type: '',
      tags: [],
      player: '',
    };
  }
}