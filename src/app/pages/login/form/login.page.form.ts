import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

export class LoginPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
  }

  public createForm(): FormGroup {
    return this.formBuilder.group({
      username: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(12),
          this.whitespacesValidator,
          this.requiredValidator,
          this.symbolsValidator,
        ],
      ],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(16),
          this.whitespacesValidator,
          this.requiredValidator,
          this.symbolsValidator,
        ],
      ],
    });
  }

  // emailValidator(control: AbstractControl) {
  //   if (control.value) {
  //     const matches = control.value.match(/^\S+@\S+\.\S+$/);
  //     console.log(matches);
  //     return matches ? null : { invalidEmail: true };
  //   } else {
  //     return null;
  //   }
  // }

  whitespacesValidator(control: AbstractControl) {
    if (control.value) {
      const matches = control.value.match(/\s+/g);
      console.log(matches);
      return matches ? { hasWhitespaces: true } : null;
    } else {
      return null;
    }
  }

  requiredValidator(control: AbstractControl) {
    if (control.value.length === 0 && (control.dirty || control.touched)) {
      return { invalidLength: true };
    } else {
      return null;
    }
  }

  symbolsValidator(control: AbstractControl) {
    const regEx = new RegExp(/[$:-?{-~!"^_`()\[\]]/g);
    if (control.value) {
      const matches = control.value.match(regEx);
      console.log(matches);
      return matches ? { invalidSymbols: true } : null;
    } else {
      return null;
    }
  }
}
