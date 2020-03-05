import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public isShow = false;
  public isData = false;
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {

    const checkedData = this.apixuService
      .getWeather(formValues.location).pipe(map(data => {
        if (data === null) { return throwError('null data'); }
        return data;
      }));
    checkedData.subscribe(data => {
      this.weatherData = data;
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  displayData() {
    this.isData = true;
  }

}
