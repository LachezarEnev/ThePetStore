import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import Pet from 'src/app/core/models/Pet';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buyPets$: Observable<Pet[]>;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() { 
    this.buyPets$ = this.petService.getAllForSale();   
  }

  like(id: string){
    this.petService.getPetById(id)
    .subscribe((pet) => {
      if(pet.username !== localStorage.getItem("username")){
        pet.likes++; 
      }     
      this.petService.updatePet(pet, id)
      .subscribe(() => {
        this.router.navigate([ '' ])
      })   
    });   
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  }
}
