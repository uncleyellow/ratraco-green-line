import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table-reports',
  templateUrl: './table-reports.component.html',
  styleUrls: ['./table-reports.component.scss']
})
export class TableReportsComponent implements OnInit, AfterViewInit {
  @Input() item: any = {};  
  test = false
  // displayedColumns: string[] = ['stt', 'SOCONT', 'Loai', 'QuocTich', 'Dai', 'Rong', 'Cao', 'TrangThai','HanhDong'];
  // mainHeaders: string[] = ['stt', 'SOCONT', 'Loai', 'QuocTich', 'KichThuoc', 'TrangThai','HanhDong'];

  displayedColumns: string[] = [ 'Dai', 'Rong', 'Cao'];
  mainHeaders: string[] = ['KichThuoc'];
  subHeaders: string[] = ['Dai', 'Rong', 'Cao'];
  
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    if (this.item?.data) {
      this.dataSource.data = this.item.data.map((el, index) => ({
        ...el,
        stt: index + 1
      }));
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item){

  }

  deleteItem(item) {
    Swal.fire({
      title: "Bạn có chắc muốn xoá trái tim chị Vân Anh? 💔",
      text: "Hãy suy nghĩ kỹ, vì bạn sẽ không thể hoàn lại điều này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5e57",
      cancelButtonColor: "#4caf50",
      confirmButtonText: "Ừ, xoá đi 😭!",
      cancelButtonText: "Không 🚫",
      background: "#fff",
      backdrop: `
        rgba(0,0,0,0.5)
        url("https://i.gifer.com/hZx.gif")
        center center
        no-repeat
      `
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Xoá thành công 😢",
          text: "Hy vọng bạn sẽ không hối hận...",
          icon: "success",
          width: 600,
          padding: "2em",
          color: "#d32f2f",
          background: "#fff",
          backdrop: `
            rgba(0,0,0,0.4)
            url("https://www.icegif.com/wp-content/uploads/2022/09/icegif-718.gif")
            center center
            no-repeat
          `
        });
      }
    });
  }
  
}
