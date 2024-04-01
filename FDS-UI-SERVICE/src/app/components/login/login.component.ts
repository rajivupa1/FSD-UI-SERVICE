import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public landingForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    console.log('login form', this.landingForm);
  }
  public buildForm() {
    this.landingForm = this.fb.group({
      email: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9](?!.*([._-])\\1)([a-zA-Z0-9._-]*[a-zA-Z0-9])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,3}$')]
      }],
      password: ['', {
        validators: [
          Validators.required,
          Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')]
      }]
    })
  }

  public proceedNext(){
    const payload = {
      emai: 'rajiv@gmail.com',
      password: 'rajiv@123'
    }
    // this.landingService.loginUser(payload).subscribe({
    //   next: (res: any) => {
    //     console.log('res', res);
    //     // sessionStorage.setItem('applicationKey', res.applicationKey);
    //     // this.router.navigate([CommonConstants.Routes.ProfileDetails]);
    //   }
    // })
    this.router.navigate(['detials'])
  }

}
