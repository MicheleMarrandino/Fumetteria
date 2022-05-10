import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from '../../pages/login/form/login.page.form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  controller = {
    username: {
      invalidLength:  '\nL\'username non può essere vuoto.',
      invalidSymbols: '\nL\'username contiene caratteri non ammessi.',
      hasWhitespaces: '\nL\'username non può contenere spazi.',
      minlength: '\nLunghezza username minima: 5',
      maxlength: '\nLunghezza username massima: 12',
      bool: false,
    },
    password: {
      invalidLength: '\nLa password non può essere vuota.',
      invalidSymbols: '\nLa password contiene caratteri non ammessi.',
      hasWhitespaces: '\nLa password non può contenere spazi.',
      minlength: '\nLunghezza password minima: 8',
      maxlength: '\nLunghezza password massima: 16',
      bool: false,
    },
  };

  eye = false;

  inputForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.inputForm = new LoginPageForm(this.formBuilder).createForm();
  }

  showError(x: string) {
    if (this.inputForm.get(x).errors) {
      const y = Object.keys(this.inputForm.get(x).errors)[0];
      return this.controller[x][y];
    }
  }

  showIcon(x: string) {
    return this.inputForm.get(x).valid;
  }

  disableButton() {
    if (
      this.inputForm.get('username').valid &&
      this.inputForm.get('username').dirty &&
      this.inputForm.get('password').valid &&
      this.inputForm.get('password').dirty
    ) {
      console.log(this.inputForm);
      return false;
    } else {
      return true;
    }
  }


  onClick(){
    alert('La fumetteria è ancora in gestione, ' + this.inputForm.get('username').value + '...\nA presto!');
  }


  toggleEye(){
    this.eye = !this.eye;
    console.log(this.eye);
  }

}
