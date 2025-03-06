import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
constructor(
  @Inject(MAT_DIALOG_DATA) public data: any, // Nhận dữ liệu từ cha
  private dialogRef: MatDialogRef<ContactUsFormComponent>, // Đảm bảo có dòng này
){

}

onSubmit(): void {
  // Trả dữ liệu về component cha khi đóng dialog
  this.dialogRef.close({ success: true, message: "Gửi thành công!" });
}

onCancel(): void {
  this.dialogRef.close(); // Đóng dialog mà không trả dữ liệu
}
}
