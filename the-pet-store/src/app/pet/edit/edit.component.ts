import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Pet from 'src/app/core/models/Pet';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  pet: Pet;
  likes: number;
  
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.petService.getPetById(this.id)
    .subscribe((data) => {
      this.likes = data.likes;
      this.pet = data;
    });    
  }

  editHandler(body: Object){
    body['username'] = localStorage.getItem('username');
    body['likes'] = this.likes;

    if (!body['price'] || body['price']< 0) {
      body['price'] = 0;    
    }

    this.petService.updatePet(body, this.id)
    .subscribe(() => {
      this.router.navigate([ `/pet/details/${this.id}` ])
    });
  }
}
