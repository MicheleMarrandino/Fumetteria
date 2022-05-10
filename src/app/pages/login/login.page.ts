import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  // @ViewChild('email', { read: ElementRef }) email: ElementRef<HTMLElement>;
  // @ViewChild('password', { read: ElementRef }) password: ElementRef<HTMLElement>;

  // controller: object = {
  //   email: {
  //     bool: true,
  //     invalidEmail: '\nEmail non valida.',
  //     required: '\nL\'email non può essere vuota.',
  //     invalidSymbols: '\nL\'email contiene caratteri non ammessi.',
  //   },
  //   password: {
  //     bool: true,
  //     required: '\nLa password non può essere vuota.',
  //     invalidPassword: '\nLa password non può contenere spazi.',
  //     invalidSymbols: '\nLa password contiene caratteri non ammessi.',
  //   },
  // };

  bool: boolean;

  constructor() {}

  ngOnInit() {
    // this.bool = true;
    // console.log(this.controller);
  }

  // ngAfterViewInit(): void {
  //   // this.email.nativeElement.classList.remove('ng-invalid');
  //   // this.password.nativeElement.classList.remove('ng-invalid');
  // }

  // check(x): void {
  //   if (this.controller[x].bool) {
  //     this[`${x}`].nativeElement.classList.add('ng-invalid');
  //     console.log(this[`${x}`].nativeElement);
  //     this.controller[x].bool = false;
  //     console.log(this.controller[x]);
  //     return;
  //   }
  // }
}
