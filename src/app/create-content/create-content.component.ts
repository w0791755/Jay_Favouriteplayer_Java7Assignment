import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: [],
    player: '',
  };

  addContent() {
    const clonedContent = Object.assign({}, this.newContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    this.contentAdded.emit(clonedContent);
    this.newContent = {
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