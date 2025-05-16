import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, BaseChartDirective],
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
        hoverBackgroundColor: ['#2563EB', '#8B5CF6', '#EAB308'],
        hoverOffset: 10,
        borderRadius: 0,
        offset: 5,
        spacing: 0,
        borderWidth: 0
      }
    ]
  };

public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    cutout: '70%',
    radius: '90%',
    plugins: {
      legend: {
        display: false
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

}
