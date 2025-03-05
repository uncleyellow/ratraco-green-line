import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-line-chart-reports',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges{
  @Input() data: any;

  chartOptions: ApexOptions = {}; // Sửa kiểu dữ liệu thành ApexOptions

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.updateChart();
    }
  }

  updateChart() {
    // if (!this.data || !Array.isArray(this.data.data)) {
    //   console.error('Dữ liệu không hợp lệ:', this.data);
    //   return;
    // }
    
    const contIDs = this.data.data.map((item) => item.SOCONT);
    const daiValues = this.data.data.map((item) => item.Dai);
    const rongValues = this.data.data.map((item) => item.Rong);
    const caoValues = this.data.data.map((item) => item.Cao);
  
    this.chartOptions = {
      series: [
        { name: 'Dài', data: daiValues },
        { name: 'Rộng', data: rongValues },
        { name: 'Cao', data: caoValues },
      ],
      chart: { type: 'line', height: 350 },
      xaxis: { categories: contIDs },
      colors: ['#1E40AF', '#16A34A', '#DC2626'],
      stroke: { width: 3, curve: 'smooth' },
      markers: { size: 4 },
      tooltip: { theme: 'dark' },
    };
  }
  
}
