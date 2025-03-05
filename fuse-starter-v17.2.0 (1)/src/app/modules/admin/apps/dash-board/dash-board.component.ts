import { Component, OnInit } from '@angular/core';
import { DashBoardService } from 'app/shared/services/dash-board.services';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit{
  data

  constructor(
    private DashBoardServices:DashBoardService,

  ){

  }

  ngOnInit(): void {
    this.fetch()
  }

  fetch(){
    this.DashBoardServices.getSheetData('dm-cont').subscribe(rs=>{
      this.data = rs
    })
  }
}
