import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/MyClass/login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {



  public user: Login = {
    username: '',
    password: '',
  };
  FormGroup!: FormGroup;
  private _service: any;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.FormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]})
  }

  login() {


    if(this.user.username == "username") {
      console.log("Success")
    }
    this.router.navigate(['/admin']);
  }
}
