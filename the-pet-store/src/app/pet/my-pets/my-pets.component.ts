import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Pet from 'src/app/core/models/Pet';
import { PetService } from 'src/app/core/services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {  
  myPets$: Observable<Pet[]>;
  username =  localStorage.getItem("username")

  constructor(
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.myPets$ = this.petService.getMyPets(this.username);
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  }

  delete(id: string, title: string){
    if (confirm("Are you sure you want to delete "+title)) {
      this.petService.delete(id)
      .subscribe(() => 
      this.router.navigate(['']));
    }   
  }
}
