import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  loading = false;
  constructor(
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
}
