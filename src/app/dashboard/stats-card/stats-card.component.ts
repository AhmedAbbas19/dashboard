import { Component, Input, ViewChild, OnInit } from "@angular/core";
import { ChartOptions } from "../../shared/models/apexChartOptions";
import {
  ChartComponent,
  ChartType
} from "ng-apexcharts";


@Component({
  selector: "app-stats-card",
  templateUrl: "./stats-card.component.html",
})
export class StatsCardComponent implements OnInit{
  @Input("amount") amount: number = 0;
  @Input("rate") rate: number = 0;
  @Input("title") title: string = "Unknown";
  
  @Input("series") series: any[] = [];
  @Input("labels") labels: string[] = [];
  @Input("type") type: string = "Unknown";
  @Input("stroke") stroke: any = {};
  @ViewChild("chart") chart: ChartComponent = new ChartComponent();
  public chartOptions: ChartOptions;
  
  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "area",
        height: '100',
        
          toolbar: {
              show: false
          },
          width: '100%',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      labels: [],
      xaxis: {
        labels: {show : false},
        axisBorder: {
          show: false
        },
        crosshairs: {show: false}
      },
      yaxis: {
        show: false,
      },
    };
  }

  ngOnInit(){
    this.chartOptions.series = [
      {
        name: this.title,
        data: this.series
      }
    ];
    this.chartOptions.labels = this.labels;
    this.chartOptions.chart.type = <ChartType>this.type,
    this.chartOptions.stroke.curve = this.stroke.curve || this.chartOptions.stroke.curve;
  }
}
