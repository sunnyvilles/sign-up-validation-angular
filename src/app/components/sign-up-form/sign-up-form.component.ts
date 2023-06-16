import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { passwordValidator } from 'src/app/utils/password-validator';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SignUpFormComponent implements OnInit, OnDestroy {
  signUpForm!: FormGroup;
  loading = true;
  userDataSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private userData: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: passwordValidator });
  }

  createUser(): void {
    const postData: IUser & { password?: string } = { ...this.signUpForm.value };
    delete postData.password;

    this.userDataSubscription = this.userData.postUser(postData).subscribe({
      next: () => this.notifyUserCreated(),
      error: (error) => this.handleError(error),
      complete: () => this.loading = false
    });
  }

  getRequiredFieldErrorMessage(): string {
    return 'this is required field';
  }

  get firstName() {
    return this.signUpForm?.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  //improve
  notifyUserCreated(): void {
    const type = 'Success';
    const message = 'Please go to sign in page to login as new user';

    this.signUpForm?.reset();
    this.router.navigate(["/notify/", type, message]);
  }

  handleError(message: string) {
    this.loading = false;
    this.snackBar.open(message, '', {
      duration: 4000,
    });
  }

  ngOnDestroy() {
    this.userDataSubscription?.unsubscribe();
    this.signUpForm?.reset();
  }
}
