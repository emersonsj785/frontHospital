import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Aquí puedes agregar lógica para autenticar al usuario
    // Por ahora, simplemente redireccionaremos a /home
    this.router.navigateByUrl('/home');
  }

}
