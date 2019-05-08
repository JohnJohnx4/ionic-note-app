import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    private loginService: LoginService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  username: string;
  password: string;
  confirmPassword: string;
  registerUserForm = false;

  ngOnInit() {}

  toggleReigster() {
    this.registerUserForm = !this.registerUserForm;
  }

  registerUser() {
    if (!this.password || !this.confirmPassword || !this.username) {
      return this.sendAlert(
        'Missing fields',
        'Make sure all fields are filled in!'
      );
    }
    if (this.password !== this.confirmPassword) {
      return this.sendAlert(
        'Passwords dont match',
        'Make sure passwords are exactly the same!'
      );
    }
    this.loginService.registerUser(this.username, this.password).subscribe(
      (res: any) => {
        if (res.success) {
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('user', res.success);
          this.router.navigateByUrl('/notes');
        }
      },
      err => this.sendAlert('Error', err.error.error)
    );
  }

  loginUser() {
    if (!this.password || !this.username) {
      return this.sendAlert(
        'Missing fields',
        'Make sure all fields are filled in!'
      );
    }
    this.loginService.loginUser(this.username, this.password).subscribe(
      (res: any) => {
        if (res.success) {
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('user', res.success);
          this.router.navigateByUrl('/notes');
        }
      },
      err => this.sendAlert('Error', err.error.error)
    );
  }

  sendAlert(title, errorMessage) {
    this.alertCtrl
      .create({
        header: title,
        message: errorMessage,
        buttons: [
          {
            text: 'Got it',
            role: 'cancel'
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }
}
