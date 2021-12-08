import { Component, Input, OnInit } from '@angular/core';
import { SignUpForm } from '../../models/sign-up-form';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  public formModel: SignUpForm = new SignUpForm();

  constructor() { }

  ngOnInit(): void {
    this.formModel = new SignUpForm()
  }

  public getEmailError(): string {
    return !this.formModel.emailIsNotEmpty() ? 'email is required' : !this.formModel.validateEmail() ? 'invalid email' : '';
  }
  public getCityError(): string {
    return !this.formModel.validateCity() ? 'city is required' : '';
  }



  public getPasswordError(): string {
    return !this.formModel.passwordIsNotEmpty() ? 'password is required' : '';
  }

  public getRepeatedPasswordError(): string {
    return !this.formModel.validatePassword() ? 'passwords are different' : '';
  }

  public getPhoneError(): string {
    return !this.formModel.validatePhone() ? 'invalid phone' : '';
  }

  public getPostError(): string {
    return !this.formModel.validatePost() ? 'invalid post' : '';
  }


  public getFullNameError(): string {
    return !this.formModel.fullNameIsNotEmpty() ? 'full name is required' : !this.formModel.validateName() ? 'invalid name' : '';
  }
  public getAddressError(): string {
    return !this.formModel.validateAddress() ? 'address is required' : '';
  }

  public handleSubmit() {
    alert(`${this.formModel.fullName} was successfully signed up!`);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
