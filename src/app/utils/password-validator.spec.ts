import { passwordValidator } from './password-validator';
import { FormBuilder, FormGroup } from '@angular/forms';

const formData = () => ({
  password: 'P@ssword123',
  firstName: 'One',
  lastName: 'two'
});

describe('PasswordValidator', () => {
  let formBuilder: FormBuilder;

  beforeEach(() => {
    formBuilder = new FormBuilder();
  });

  it('should not return errors if the password is valid', () => {
    const formGroup: FormGroup = formBuilder.group(formData(), { validators: passwordValidator });
    expect(formGroup.errors).toBeNull();
  });

  it('should return hasFirstAndLastNames error if the password contains first or last name', () => {
    const formGroup: FormGroup = formBuilder.group({
      ...formData(),
      password: 'xJoney'
    }, { validators: passwordValidator });

    expect(formGroup.errors).toEqual({ hasFirstAndLastNames: true });
  });

  it('should return hasNoUpperAndLowerCase error if the password does not contain both uppercase and lowercase letters', () => {
    const formGroup: FormGroup = formBuilder.group({
      ...formData(),
      password: 'passwiered',
    }, { validators: passwordValidator });

    expect(formGroup.errors).toEqual({ hasNoUpperAndLowerCase: true });
  });

  it('should return both errors if the password contains first or last name and does not contain both uppercase and lowercase letters', () => {
    const formGroup: FormGroup = formBuilder.group({
      ...formData(),
      password: 'twothree',
    }, { validators: passwordValidator });

    expect(formGroup.errors).toEqual({ hasFirstAndLastNames: true, hasNoUpperAndLowerCase: true });
  });
});
