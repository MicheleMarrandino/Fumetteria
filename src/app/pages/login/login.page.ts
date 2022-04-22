import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  psw: string;


  constructor() { }

  ngOnInit() {
  }

  login(): void{
    if(!this.username || !this.psw){
    alert(`Inserisci entrambi i campi sottostanti.`);
    return;
    }
    alert(`Ciao ${this.username}!\nLa tua password è: ${this.psw}`);
  }

}
