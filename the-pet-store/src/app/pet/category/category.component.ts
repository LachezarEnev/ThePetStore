import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetService } from 'src/app/core/services/pet.service';
import { Observable } from 'rxjs';
import Pet from 'src/app/core/models/Pet';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataCategory: string;
  categoryPets$: Observable<Pet[]>; 

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
    this.dataCategory = params['category'];      
    this.categoryPets$ = this.petService.getCategory(this.dataCategory);
  });
}

like(id: string){
  this.petService.getPetById(id)
  .subscribe((pet) => {
    if(pet.username !== localStorage.getItem("username")){
      pet.likes++; 
    }      
    this.petService.updatePet(pet, id)
    .subscribe(() => {
      this.categoryPets$ = this.petService.getCategory(this.dataCategory); 
    })   
  });    
}

isPublisher(username: string){
  return username === localStorage.getItem("username");
}
  
category(category: string){
  this.router.navigate([ 'pet/category' ], { queryParams: { category: category } })
}
  
}
