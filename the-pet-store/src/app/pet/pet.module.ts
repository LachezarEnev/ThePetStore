import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class PetModule { }
