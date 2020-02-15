import { Component,  DoCheck, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
 @ViewChild('searchForm') searchForm: NgForm;

  username: string ='';
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngDoCheck(): void {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout()
    .subscribe(() => {
      localStorage.clear();
      this.router.navigate([ '' ])
    })
  }

  search(){
    const query = this.searchForm.value;    
        this.router.navigate([ 'pet/search' ], {queryParams: { search: query.search } } )
  }
}
