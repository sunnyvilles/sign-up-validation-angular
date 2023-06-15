import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

type IError = {
  hasFirstAndLastNames?: boolean,
  hasNoUpperAndLowerCase?: boolean
}

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')!.value;
  const firstName = control.get('firstName')!.value;
  const lastName = control.get('lastName')!.value;

  if (!password || !firstName || !lastName) {
    return null;
  }

  const upperCaseCheck = /[A-Z]/.test(password);
  const lowerCaseCheck = /[a-z]/.test(password);

  let errors: IError = {};

  if (password.includes(firstName) || password.includes(lastName)) errors['hasFirstAndLastNames'] = true;
  if (!(upperCaseCheck && lowerCaseCheck)) errors['hasNoUpperAndLowerCase'] = true;

  return Object.keys(errors).length > 0 ? errors : null;;
};
