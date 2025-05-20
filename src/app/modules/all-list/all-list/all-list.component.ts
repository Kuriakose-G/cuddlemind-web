import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../../shared/components/alert/service/alert.service';

@Component({
  selector: 'app-all-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './all-list.component.html',
  styleUrl: './all-list.component.css'
})
export class AllListComponent {
  userForm: FormGroup;

  users: any[] = [
    {
      name: 'Basic Plan',
      email: 'Description about basic plan',
      amount: 1999,
      validity: '30 Days',
      bookings: 3
    },
    {
      name: 'Standard Plan',
      email: 'Description about standard plan',
      amount: 3999,
      validity: '60 Days',
      bookings: 5
    },
    {
      name: 'Premium Plan',
      email: 'Description about premium plan',
      amount: 5999,
      validity: '90 Days',
      bookings: 8
    }
  ];

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
      phone: ['', [Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });

  }

  openModal(content: any) {
    const buttonElement = document.activeElement as HTMLElement
    buttonElement.blur();

    this.modalService.open(content)
  }

  onSave(modal: any) {
    if (this.userForm.valid) {
      console.log('Form Value:', this.userForm.value);
      const newPlan = this.userForm.value;
      this.users.push(newPlan);

      this.alertService.showAlert({
        message: 'Plan Created',
        type: 'success',
        autoDismiss: true,
        duration: 4000
      })

      this.userForm.reset();
      modal.close('Save click');
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  close() {
    this.userForm.reset()
    this.modalService.dismissAll()
  }
}
