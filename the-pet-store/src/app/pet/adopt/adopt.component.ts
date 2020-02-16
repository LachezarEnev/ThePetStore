import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import Pet from 'src/app/core/models/Pet';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {
  adoptPets$: Observable<Pet[]>;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {    
    this.adoptPets$ = this.petService.getAllForAdoption();   
  }

  like(id: string){
    this.petService.getPetById(id)
    .subscribe((pet) => {
      if(pet.username !== localStorage.getItem("username")){
        pet.likes++; 
      }     
      this.petService.updatePet(pet, id)
      .subscribe(() => {
        this.adoptPets$ = this.petService.getAllForAdoption(); 
      })   
    });    
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  }
}
