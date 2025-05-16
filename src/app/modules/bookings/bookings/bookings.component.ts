import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  mockBookings = Array.from({ length: 10 }, (_, i) => ({
    name: 'Janet Adebayo',
    email: 'janet.a@mail.com',
    doctor: i >= 8 ? 'Staff' : i === 7 ? '+Babu Doctor' : 'Babu Doctor',
    mode: i >= 8 ? 'Chat' : 'Voice Call',
    bookedDate: '12 Aug 2022',
    dateTime: '12 Aug 2022 - 12:25 am',
    status: 'Active'
  }));
}
