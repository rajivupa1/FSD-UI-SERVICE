import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  public details!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }
  
  ngOnInit(): void {
      this.getData();
  }

  public buildForm(){
    this.details = this.fb.group({
      name: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9](?!.*([._-])\\1)([a-zA-Z0-9._-]*[a-zA-Z0-9])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,3}$')]
      }],
      email: ['', {
        validators: [
          Validators.required,
          Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')]
      }],
      phone: ['', {
        validators: [
          Validators.required,
          Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')]
      }]
    })
  }

  public getData(){
   this.details.controls['name'].setValue('Rajiv');
   this.details.controls['email'].setValue('rajiv@gmail.com');
   this.details.controls['phone'].setValue('8934008151');
  }
}
