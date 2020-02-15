import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,  
    private toastr: ToastrService  
    ) { }

  ngOnInit() {
  }

  loginHandler(data: any){    
    this.authService.signIn(data)
    .pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 401){
        this.toastr.error(err.error.description, 'Error!');              
      }
      return throwError(err);      
    }))       
    .subscribe((data) => {      
      this.authService.saveUserInfo(data),
      this.router.navigate(['']);   
    });
  }
 
}
