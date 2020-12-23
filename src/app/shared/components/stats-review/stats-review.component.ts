import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartOptions } from "../../models/apexChartOptions";
import {
  ChartComponent,
  ChartType
} from "ng-apexcharts";

@Component({
  selector: "app-stats-review",
  templateUrl: "./stats-review.component.html",
})
export class StatsReviewComponent implements OnInit {
  @Input("time") time: boolean = false;
  @Input("title") title: string = "Unknown";

  @Input("series") series: any[] = [];
  @Input("labels") labels: string[] = [];
  @Input("type") type: string = "";
  @Input("stroke") stroke: any = {};
  @ViewChild("chart") chart: ChartComponent = new ChartComponent();
  public chartOptions: ChartOptions;
  
  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "area",
        height: '235',
        zoom: {
          enabled: false
        },
        foreColor: '#a3a3a3'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight",
      },
      labels: [],
      xaxis: {
        labels: {show : true},
        axisBorder: {
          show: true
        },
        crosshairs: {show: false},
        
      },
      yaxis: {
        show: true,
      }
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
