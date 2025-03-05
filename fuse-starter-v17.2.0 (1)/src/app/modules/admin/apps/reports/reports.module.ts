import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { MaterialModule } from 'app/material/material.module';
import { ReportsComponent } from './reports.component';
import { TableReportsComponent } from './table-reports/table-reports.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { MultipleYAxisChartComponent } from './multiple-y-axis-chart/multiple-y-axis-chart.component';
import { PieComponent } from './pie/pie.component';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    ReportsComponent,
    TableReportsComponent,
    LineChartComponent,
    AreaChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    MultipleYAxisChartComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    FuseScrollbarModule,
    NgApexchartsModule 
  ]
})
export class ReportsModule { }
