import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  status: string = 'Completed'
  public doughnutChartLabels = ['Users', 'Chats', 'Bookings'];
  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [55, 10, 35],
        backgroundColor: ['#3B82F6', '#A78BFA', '#FACC15'],
        borderWidth: 0
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
