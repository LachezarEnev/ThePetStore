import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import Pet from 'src/app/core/models/Pet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  pet$: Observable<Pet>;

  constructor(
    private petservice: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    this.pet$ = this.petservice.getPetById(this.id);      
  }

}
