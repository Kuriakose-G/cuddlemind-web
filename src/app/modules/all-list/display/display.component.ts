import { Component } from '@angular/core';
import { AllListComponent } from "../all-list/all-list.component";
import { DoctorListComponent } from "../doctor-list/doctor-list.component";
import { StaffslistComponent } from "../staffslist/staffslist.component";
import { UsersListComponent } from "../users-list/users-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  imports: [CommonModule,AllListComponent, DoctorListComponent, StaffslistComponent, UsersListComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  selectedList: string = 'All';

  selectList(type: string) {    
    this.selectedList = type;
  }

}
