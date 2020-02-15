import { Component, OnInit, DoCheck } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Pet from 'src/app/core/models/Pet';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck { 
  allPets$: Observable<Pet[]>; 
  isLoggedIn: boolean; 
  
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService    
    ) { }

  ngOnInit() { 
    this.loadAllPets();       
  }

  ngDoCheck(): void {    
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  loadAllPets() {
    this.allPets$ = this.petService.getAll();
  }

  like(id: string){
    this.petService.getPetById(id)
    .subscribe((pet) => {
      if(pet.username !== localStorage.getItem("username")){
        pet.likes++; 
      }      
      this.petService.updatePet(pet, id)
      .subscribe(() => {
        this.loadAllPets(); 
      })   
    });    
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  }

}   
