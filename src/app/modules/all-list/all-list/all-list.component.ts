import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-list',
  imports: [CommonModule],
  templateUrl: './all-list.component.html',
  styleUrl: './all-list.component.css'
})
export class AllListComponent {
  plans: any[] = [
    {
      name: 'Basic Plan',
      description: 'Description about basic plan',
      amount: 1999,
      validity: '30 Days',
      bookings: 3
    },
    {
      name: 'Standard Plan',
      description: 'Description about standard plan',
      amount: 3999,
      validity: '60 Days',
      bookings: 5
    },
    {
      name: 'Premium Plan',
      description: 'Description about premium plan',
      amount: 5999,
      validity: '90 Days',
      bookings: 8
    }
  ];
}
