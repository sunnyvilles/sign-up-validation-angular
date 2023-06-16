import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material/material.module';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpFormComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [HttpClient],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form fields initially', () => {
    expect(component.signUpForm.valid).toBe(false);
  });

  it('should have a valid form if all inputs are valid', () => {
    const form = component.signUpForm;
    form.controls['firstName'].setValue('One');
    form.controls['lastName'].setValue('Two');
    form.controls['email'].setValue('xOney.two@example.com');
    form.controls['password'].setValue('passWord');

    expect(form.valid).toBe(true);
  });

});
