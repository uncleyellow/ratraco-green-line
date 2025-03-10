import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { environment } from 'environments/environment.prod'; // Nếu file cách xa

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
  
    this.http.post(`${environment.apiUrl}/contact`, formData).subscribe({
      next: (res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        this.contactForm.reset();
        this.loading = false;
      },
      error: (err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something went wrong!",
          showConfirmButton: false,
          timer: 1500
        });
        console.error(err);
        this.loading = false;
      },
    });
  }
}
