import { Component } from '@angular/core';
import { AlertService } from '../../../shared/components/alert/service/alert.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private alertService: AlertService
  ) { }

  login() {
    this.alertService.showAlert({
      message: 'Working Properly',
      type: 'success',
      autoDismiss: true,
      duration: 4000
    })
  }
}
