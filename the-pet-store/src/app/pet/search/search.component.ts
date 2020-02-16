import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Pet from 'src/app/core/models/Pet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchedPets: Pet[]; 
  query: string;
  searchedPetSub: Subscription

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,    
        
  ) { }

  ngOnInit(): void {      
    this.route.queryParams.subscribe((params: Params) => {
    this.query = params['search'];  
    this.searchedPetSub = this.petService.getAll()   
    .subscribe((data) => {
      this.searchedPets = data.filter(p => p.title.toLowerCase().includes(this.query.toLowerCase()) 
      || p.category.includes(this.query.toLowerCase())
      || this.query.toLowerCase().includes(p.category));
      if(this.searchedPets.length === 0) {
        this.router.navigate(['/pet/no-result'])
      }      
      });             
    }); 
  }

  ngOnDestroy(){
    this.searchedPetSub.unsubscribe();
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  } 

  like(id: string){
    this.petService.getPetById(id)
    .subscribe((pet) => {
      if(pet.username !== localStorage.getItem("username")){
        pet.likes++; 
      }      
      this.petService.updatePet(pet, id)
      .subscribe(() => {
        this.router.navigate([''])
      })   
    });    
  }

}
