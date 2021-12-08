import { SignUpForm } from './sign-up-form';

describe('SignUpForm', () => {

  it('full name should be required', () => {
    const form = new SignUpForm();
    expect(form.fullNameIsNotEmpty()).toBeFalse();
    form.fullName = 'Bohak Yuliia';
    expect(form.fullNameIsNotEmpty()).toBeTruthy();
  });

  it('full name can contain only latin letters, numbers and underscore', () => {
    const form = new SignUpForm();
    form.fullName = 'name';
    expect(form.validateName()).toBeTruthy();
    form.fullName = 'name1';
    expect(form.validateName()).toBeFalse();
  });

  it('email should be required', () => {
    const form = new SignUpForm();
    expect(form.emailIsNotEmpty()).toBeFalse();
    form.email = 'email@gmail.com';
    expect(form.emailIsNotEmpty()).toBeTruthy();
  });

  it('address should be required', () => {
    const form = new SignUpForm();
    expect(form.validateAddress()).toBeFalse();
    form.address = 'somewhere';
    expect(form.validateAddress()).toBeTruthy();
  });

  it('email should be valid email', () => {
    const form = new SignUpForm();
    expect(form.validateEmail()).toBeFalse();
    form.email = 'ghhfghgf';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'gdfgdgg@';
    expect(form.validateEmail()).toBeFalse();
    form.email = '@fgdgdf@.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'gdgd.com';
    expect(form.validateEmail()).toBeFalse();
    form.email = 'email@email.com';
    expect(form.validateEmail()).toBeTruthy();
  });

  it('password should be required', () => {
    const form = new SignUpForm();
    expect(form.passwordIsNotEmpty()).toBeFalse();
    form.password = '12345';
    expect(form.passwordIsNotEmpty()).toBeTruthy();
  });

  it('city is not empty', () => {
    const form = new SignUpForm();
    expect(form.cityIsNotEmpty()).toBeFalse();
  });

  it('city should be valid', () => {
    const form = new SignUpForm();
    form.city = 'somwhere';
    expect(form.validateCity()).toBeTruthy();
  });

  it('repeated password should be required', () => {
    const form = new SignUpForm();
    expect(form.repeatedPasswordIsNotEmpty()).toBeFalse();
    form.repeatedPassword = '12345';
    expect(form.repeatedPasswordIsNotEmpty()).toBeTruthy();
  });

  it('post number should be valid', () => {
    const form = new SignUpForm();
    expect(form.validatePost()).toBeTrue();
    form.post_number = '12345';
    expect(form.validatePost()).toBeTruthy();
    form.post_number = '12345 ';
    expect(form.validatePost()).toBeFalse();
  });

  it('phone number should be valid', () => {
    const form = new SignUpForm();
    expect(form.validatePhone()).toBeFalse();
    form.number = '12345';
    expect(form.validatePhone()).toBeFalse();
    form.number = '12345 ';
    expect(form.validatePhone()).toBeFalse();
    form.number = '1234567890';
    expect(form.validatePost()).toBeTrue();
  });

  it('passwords should be valid only when password and repeated password are equal', () => {
    const form = new SignUpForm();
    expect(form.validatePassword()).toBeFalse();
    form.password = '12345';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = '123';
    expect(form.validatePassword()).toBeFalse();
    form.repeatedPassword = '12345';
    expect(form.validatePassword()).toBeTruthy();
  });
});
