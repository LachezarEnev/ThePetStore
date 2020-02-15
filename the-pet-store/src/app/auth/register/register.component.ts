import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private authService: AuthService,   
    private router: Router,
    private toastr: ToastrService
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
    .pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 409){
        this.toastr.error(err.error.description, 'Error!');              
      }
      return throwError(err);      
    }))         
    .subscribe((data) => {      
      this.authService.saveUserInfo(data),
      this.router.navigate(['']);                  
    })    
  }

}
