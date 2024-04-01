import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.scss']
})
export class RagisterComponent {
  public ragister!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    console.log('login form', this.ragister);
  }
  public buildForm() {
    this.ragister = this.fb.group({
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
    this.router.navigate(['detials'])
  }
}
