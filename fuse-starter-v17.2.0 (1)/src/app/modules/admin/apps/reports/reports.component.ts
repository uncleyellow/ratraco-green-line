import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/shared/services/reports.services';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ReportsComponent implements OnInit{
  data
  reports
  isVisible: any[] = [true, true, true, true]; // Mặc định hiển thị tất cả các card
  isHidden: boolean[] = [false, false, false, false];

  constructor(
    private ReportsServices:ReportsService,

  ){

  }
  
  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.ReportsServices.getSheetData('api/dmcont').subscribe(rs => {
        this.data = rs; // Lưu danh sách container
    }, error => {
      console.error('Lỗi khi gọi API:', error);
    });
  }
  
  toggleCard(index: number) {
    this.isHidden[index] = !this.isHidden[index];
  }

  closeCard(index: number) {
    this.isHidden[index] = true;
  }

  restoreCards() {
    this.isHidden = [false, false, false, false];
  }
  
}
