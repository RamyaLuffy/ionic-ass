import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  userName: string;
  password: string;
  formData: FormGroup;
  form: FormGroup;
  type = true;
  userloginstatus:any;


  constructor(
    private navCtrl: NavController, 
    private login:LoginService,
    private router : Router,
    private authService: AuthService,

  ) { 
  
  }

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("Ramya"),
   });


  }

  changeType() {
    this.type = !this.type;
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    this.login.login(this.userName, this.password)
       .subscribe( data => { 
        this.userloginstatus=data
        console.log(this.userloginstatus,"login successfull");
          console.log("Is Login Success: " + data); 
          if(this.userloginstatus==true){
            this.navCtrl.navigateRoot('/home');
          }else{
            this.navCtrl.navigateRoot('/');
          }
         if(data) this.router.navigate(['/home']); 
    });
    const isUserLoggedIn = this.authService.login(this.userName, this.password);
    if (isUserLoggedIn) {
     
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  }
 }



