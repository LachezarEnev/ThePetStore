import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AdoptComponent } from './adopt/adopt.component';
import { BuyComponent } from './buy/buy.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [CreateComponent, AdoptComponent, BuyComponent, DetailsComponent, EditComponent, MyPetsComponent, SearchComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class PetModule { }
