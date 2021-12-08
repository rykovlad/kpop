import { FormControl, FormGroup } from '@angular/forms';

export class SignUpForm {
  private nameRegex = /^[a-zA-Z_-\s]+$/;
  private cityRegex = /^[a-zA-Z_-]+$/;
  //private addressRegex = /^[a-zA-Z0-9_-\s]+$/;
  private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  private phoneRegex = /^([0-9]-?){9}[0-9]$/;
  private postRegex = /^([0-9]-?){0,10}[0-9]$/;

  public fullName = '';

  public address = '';
  public city = '';
  public post_number = '';
  public number = '';

  public info = '';
  public email = '';
  public password = '';
  public repeatedPassword = '';
  



  public cityIsNotEmpty() {
    return this.city.length > 0;
  }

  public validateCity(): boolean {
    return this.cityRegex.test(this.city);
  }

  public validateName(): boolean {
    return this.nameRegex.test(this.fullName);
  }


  public fullNameIsNotEmpty() {
    return this.fullName.length > 0;
  }

  public validateAddress(): boolean {
    return this.address.length > 0;
  }

  public emailIsNotEmpty() {
    return this.email.length > 0;
  }

  public validateEmail(): boolean {
    return this.emailRegex.test(this.email);
  }

  public passwordIsNotEmpty(): boolean {
    return this.password.length > 0;
  }

  public repeatedPasswordIsNotEmpty(): boolean {
    return this.repeatedPassword.length > 0;
  }

  public validatePassword(): boolean {
    return this.passwordIsNotEmpty() && this.repeatedPasswordIsNotEmpty() && this.password === this.repeatedPassword;
  }

  public validatePhone(): boolean {
    return this.phoneRegex.test(this.number);
  }
  public validatePost(): boolean {
    return this.post_number.length == 0 || this.postRegex.test(this.post_number);
  }


  public validate(): boolean {
    return this.validateAddress()
      && this.emailIsNotEmpty()
      && this.validateEmail()
      && this.validatePassword()
      && this.validatePhone()
      && this.validateName()
    && this.validatePost();
  }

}

export class SignUpValidationResults {
  constructor(public login = '',
              public password = '',
              public repeatedPassword = '',
              public fullName = '',
              public email = '',
              public post_number = '',
              public homePage = '') {
  }
}
