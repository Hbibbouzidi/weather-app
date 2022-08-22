import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=0ff338302010071a1ec0fb2039b2cb71&query=' + location
    );
}
}
