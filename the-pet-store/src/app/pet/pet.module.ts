import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { AdoptComponent } from './adopt/adopt.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SearchComponent } from './search/search.component';
import { NoResultComponent } from './no-result/no-result.component';
import { PetRoutingModule } from './pet-routing.module';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [CreateComponent, AdoptComponent, BuyComponent, DetailsComponent, EditComponent, MyPetsComponent, SearchComponent, NoResultComponent, CategoryComponent],
  imports: [
    CommonModule,    
    FormsModule,
    PetRoutingModule   
  ]
})
export class PetModule { }
