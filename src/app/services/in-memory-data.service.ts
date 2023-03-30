import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import '../contentDb/player.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const player: Content[] = [
        {
            "id": 1,
            "title": "Criket",
            "player": "Jay",
            "description": "Batsman",
            "imgURL": "null",
            "type": "Front",
            "tags": ["A"]
          }, 
          {
              "id": 2,
              "title": "Criket",
              "player": "Tirth",
              "description": "Batsman",
              "imgURL": "null",
              "type": "Front",
              "tags": ["AA"]
            },
            {
              "id": 3,
              "title": "Cricet",
              "player": "Darshan",
              "description": "Batsman",
              "imgURL": "null",
              "type": "Mid",
              "tags": ["AC"]
            },
            {
              "id": 4,
              "title": "Cricet",
              "player": "Arth",
              "description": "Bowler",
              "imgURL": "null",
              "type": "Front",
              "tags": ["A"]
            },
            {
              "id": 5,
              "title": "Cricet",
              "player": "Bhavya",
              "description": "Bowler",
              "imgURL": "null",
              "type": "Front",
              "tags": ["AD"]
            },
            {
              "id": 6,
              "title": "Cricet",
              "player": "Dhruv",
              "description": "Bowler",
              "imgURL": "null",
              "type": "Front",
              "tags": ["AB"]
            }
        ];

        return { player };
      }
      constructor() {}
    
      public genId(player: Content[]): number {
        return player.length > 0
          ? Math.max(...player.map((player) => player.id)) + 1
          : 1000;
      }
    }