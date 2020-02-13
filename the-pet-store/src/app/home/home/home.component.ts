import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Pet from 'src/app/core/models/Pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  allPets$: Observable<Pet[]>;  
  
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router    
    ) { }

  ngOnInit() { 
    this.loadAllPets();       
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
