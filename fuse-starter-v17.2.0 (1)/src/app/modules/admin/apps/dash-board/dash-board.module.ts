import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dash-board-routing.module';
import { MaterialModule } from 'app/material/material.module';
import { DashBoardComponent } from './dash-board.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { MultipleYAxisChartComponent } from './multiple-y-axis-chart/multiple-y-axis-chart.component';
import { PieComponent } from './pie/pie.component';
import { TableDashBoardComponent } from './table-dash-board/table-dash-board.component';



@NgModule({
  declarations: [
    DashBoardComponent,
    LineChartComponent,
    AreaChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    MultipleYAxisChartComponent,
    PieComponent,
    TableDashBoardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MaterialModule
  ]
})
export class DashBoardModule { }
