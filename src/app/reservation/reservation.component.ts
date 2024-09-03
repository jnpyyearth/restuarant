import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  reservationForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}
 
  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guests: ['', [Validators.required, Validators.min(1)]],
      specialRequests: [''],
    });
  }
 
  onSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJ5W0EDCh27eWatK4lyjZ8YB7qllvkQyA_A&s",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      
    } else {
 
      Object.keys(this.reservationForm.controls).forEach((key) => {
        const control = this.reservationForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
}

