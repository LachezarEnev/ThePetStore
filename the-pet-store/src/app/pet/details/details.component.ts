import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/core/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import Pet from 'src/app/core/models/Pet';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string;
  pet$: Observable<Pet>;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    this.pet$ = this.petService.getPetById(this.id);      
  }

  isPublisher(username: string){
    return username === localStorage.getItem("username");
  }

  delete(id: string, title: string){
    if (confirm("Are you sure you want to delete "+title)) {
      this.petService.delete(id)
      .subscribe(() => {
        this.toastr.success('Pet deleted successfully!', 'Succsess!');
        this.router.navigate(['/pet/my-pets']);
      });
    }   
  }
}
