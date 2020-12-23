import { Component, Input, OnInit, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
})
export class PieChartComponent implements OnInit {
  @Input("title") title: string = "Unknown";

  @Input("series") series: any[] = [];
  @Input("labels") labels: string[] = [];
  @ViewChild("chart") chart: ChartComponent = new ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "donut",
        width: 400
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.chartOptions.series = this.series;
    this.chartOptions.labels = this.labels;
  }
}
