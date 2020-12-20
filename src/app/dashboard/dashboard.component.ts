import { Component, OnInit } from '@angular/core';

import series from '../shared/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  newCustomersSeries = this.generateData(8);
  newOrdersSeries = this.generateData();
  GrowthSeries = this.generateData();

  revenueSeries = this.generateData();
  revenueLables = series.monthDataSeries1.dates;

  monthlySalesSeries = this.generateData();
  monthlySalesLables = series.monthDataSeries2.dates;

  storageSeries = [20, 80];
  storageLables = ['Free Space', 'Used Storage'];
  constructor() {}

  ngOnInit() {}

  generateData(count: number = 12, yrange: any = { min: 1, max: 400 }) {
    var i = 0;
    let series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }
}
