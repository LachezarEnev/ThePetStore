import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createHandler(body: Object){    
    body['username'] = localStorage.getItem('username');
    body['likes'] = 0;

    if (!body['price'] || body['price']< 0) {
      body['price'] = 0;
    
    }

    this.petService.createPet(body)
    .subscribe(() => {
      this.router.navigate([ '' ])
    })
  }
}
