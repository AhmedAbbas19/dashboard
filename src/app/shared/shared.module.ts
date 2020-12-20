import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatsCardComponent } from "./components/stats-card/stats-card.component";
import { StatsReviewComponent } from "./components/stats-review/stats-review.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { ProjectsTableComponent } from "./components/projects-table/projects-table.component";
import { InpoxComponent } from './components/inpox/inpox.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    StatsCardComponent,
    StatsReviewComponent,
    PieChartComponent,
    ProjectsTableComponent,
    InpoxComponent,
  ],
  imports: [CommonModule, NgApexchartsModule],
exports: [
    CommonModule,
    StatsCardComponent,
    StatsReviewComponent,
    PieChartComponent,
    ProjectsTableComponent,
    InpoxComponent
  ],
})
export class SharedModule {}
