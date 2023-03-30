declare const require: any;

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root',
})
export class playerService {
  private player: Content[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getplayer(): Observable<Content[]> {
    return this.http.get<Content[]>('api/player');
  }

  addplayer(player: Content): Observable<Content> {
    return this.http.post<Content>('api/player', player, this.httpOptions);
  }

  updateplayer(player: Content): Observable<any> {
    return this.http.put(`api/player/${player.id}`, player, this.httpOptions);
  }

  getplayerById(id: number): Observable<any> {
    return this.http.get<Content>(`api/player/${id}`);
  }
}