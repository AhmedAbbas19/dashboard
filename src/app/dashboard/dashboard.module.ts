import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { StatsCardComponent } from "../dashboard/stats-card/stats-card.component";
import { StatsReviewComponent } from "../dashboard/stats-review/stats-review.component";
import { PieChartComponent } from "../dashboard/pie-chart/pie-chart.component";
import { ProjectsTableComponent } from "../dashboard/projects-table/projects-table.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [DashboardComponent, StatsCardComponent,
    StatsReviewComponent,
    PieChartComponent,
    ProjectsTableComponent,],
  imports: [SharedModule, DashboardRoutingModule, NgApexchartsModule],
})
export class DashboardModule {}
