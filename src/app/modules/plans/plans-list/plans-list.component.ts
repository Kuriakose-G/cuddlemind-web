import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../../shared/components/alert/service/alert.service';

@Component({
  selector: 'app-plans-list',
  imports: [CommonModule, ReactiveFormsModule, NgbTooltipModule],
  templateUrl: './plans-list.component.html',
  styleUrl: './plans-list.component.css'
})
export class PlansListComponent {
  planForm: FormGroup;
  plans: any[] = [
    {
      planName: 'Basic Plan',
      description: 'Description about basic plan',
      amount: 1999,
      validity: '30',
      bookings: 3,
    },
    {
      planName: 'Standard Plan',
      description: 'Description about standard plan',
      amount: 3999,
      validity: '60',
      bookings: 5,
    },
    {
      planName: 'Premium Plan',
      description: 'Description about premium plan',
      amount: 5999,
      validity: '90',
      bookings: 8,
    }
  ];

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.planForm = this.fb.group({
      planName: ['', [Validators.required, Validators.minLength(3)]],
      amount: ['', [Validators.required, Validators.min(1)]],
      validity: ['', [Validators.required, this.positiveIntegerValidator]],
      bookings: ['', [Validators.required, this.positiveIntegerValidator]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  positiveIntegerValidator(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (val === null || val === '' || val === undefined) {
      return null; // Let 'required' handle empty values
    }

    const numberVal = +val;
    if (isNaN(numberVal) || numberVal <= 0 || !Number.isInteger(numberVal)) {
      return { positiveInteger: true };
    }

    return null;
  }

  openModal(content: any) {
    const buttonElement = document.activeElement as HTMLElement
    buttonElement.blur();

    this.modalService.open(content)
  }

  onSave(modal: any) {
    if (this.planForm.valid) {
      const newPlan = this.planForm.value;
      this.plans.push(newPlan);

      this.alertService.showAlert({
        message: 'Plan Created',
        type: 'success',
        autoDismiss: true,
        duration: 4000
      })

      this.planForm.reset();
      modal.close('Save click');
    } else {
      this.planForm.markAllAsTouched();
    }
  }

  close() {
    this.planForm.reset()
    this.modalService.dismissAll()
  }

}
