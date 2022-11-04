import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formdata = {email:"",password:""};
  submit=false;
  loading=false;
  errorMessage="";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }
  onSubmit(){
    this.loading=true;
    //call login service
    this.auth.login(this.formdata.email,this.formdata.password)
    .subscribe({
        next:data=>{
            //store token
            this.auth.storeToken(data.idToken);
            console.log('logged user token is '+data.idToken);
            this.auth.canAuthenticate();
            this.router.navigate(['list']);

        },
        error:data=>{
            if (data.error.error.message=="INVALID_PASSWORD" || data.error.error.message=="INVALID_EMAIL") {
                this.errorMessage = "Invalid Credentials!";
            } else{
                this.errorMessage = "Unknown error when logging into this account!";
            }
        }
    }).add(()=>{
        this.loading =false;
        console.log('login process completed!');

    })
  }

}
