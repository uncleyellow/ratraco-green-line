import { Component } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent {
  dowloadFile() {
    const fileUrl = 'assets/green-line/Hosoungvienform.doc'; // Đường dẫn file
    const fileName = 'Hosoungvienform.doc'; // Tên file khi tải về
  
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  
  
}
