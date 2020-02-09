import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,    
    ) { }

  ngOnInit() {
  }

  loginHandler(data: any){
    this.authService.signIn(data)
    .subscribe((data) =>
    this.authService.saveUserInfo(data));   

    this.router.navigate(['']);
  }

}
