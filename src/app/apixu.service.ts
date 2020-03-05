import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location) {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=e12c48006dac161204ff51f2c38bad84&units=metric'
    );
  }
}
