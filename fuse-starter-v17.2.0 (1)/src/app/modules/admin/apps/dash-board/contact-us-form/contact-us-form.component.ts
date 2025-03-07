import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {

contactForm!: FormGroup;
loading = false;

constructor(
  @Inject(MAT_DIALOG_DATA) public data: any, // Nhận dữ liệu từ cha
  private dialogRef: MatDialogRef<ContactUsFormComponent>, // Đảm bảo có dòng này
  private fb: FormBuilder, 
  private http: HttpClient
){

}
ngOnInit() {
  this.contactForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
}
onSubmit() {
  if (this.contactForm.invalid) return;

  this.loading = true;
  const formData = {
    id: crypto.randomUUID(), // Tạo GUID trên frontend
    ...this.contactForm.value,
    createdAt: new Date().toISOString(),
  };

  this.http.post('http://localhost:3000/api/contact', formData).subscribe({
    next: (res) => {
      alert('Gửi thành công!');
      this.contactForm.reset();
      this.loading = false;
    },
    error: (err) => {
      alert('Lỗi gửi dữ liệu!');
      console.error(err);
      this.loading = false;
    },
  });
}


onCancel(): void {
  this.dialogRef.close(); // Đóng dialog mà không trả dữ liệu
}
}
