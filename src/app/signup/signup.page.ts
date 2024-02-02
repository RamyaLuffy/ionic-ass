import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupData = {
    username: '',
    email: '',
    password: ''
  };




  constructor(private router: Router,private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
    this.signup
  }

  signup() {
    if (this.validateForm()) {
      const signupSuccessful = this.authService.signup(this.signupData);
      if (signupSuccessful) {
        this.navCtrl.navigateRoot('/home');
      } else {
        console.log('Signup failed. Please check your information.');
      }
    } else {
      console.log('Form is not valid. Please check your inputs.');
    }
  }

  private validateForm(): boolean {
    if (!this.signupData.username || !this.signupData.email || !this.signupData.password) {
    
      return false;
    }
    return true;
  }
}