import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Day } from './day';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  constructor(private http: HttpClient) { }

  getDays() {
    return this.http.get<Day[]>('http://localhost:3000/days');
  }

  getDay(id) {
    return this.http.get<Day>(`http://localhost:3000/day/${id}`);
  }

}
