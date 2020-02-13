import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(
    private authService: AuthService,   
    private router: Router
    ) { }

  ngOnInit() {
  }

  registerHandler(data: any){
    const username = data.username;
    const password = data.passwords.password;

    const body = {
      username,
      password
    };
    this.authService.signUp(body)
    .subscribe((data) => {
      this.authService.saveUserInfo(data),
      this.router.navigate([''])
    });
    
  }
}
