import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KinveyModule } from 'kinvey-angular-sdk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PetModule } from './pet/pet.module';
import { PetRoutingModule } from './pet/pet-routing.module';
import { PetService } from './core/services/pet.service';
import { AuthService } from './core/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,     
    HttpClientModule,    
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule, 
    PetModule,
    PetRoutingModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule,
    KinveyModule.init({
      appKey: 'kid_B1sN5uehB',
      appSecret: 'dafe60e2e68d4a35a2c426e1174e257c'
    })    
  ],
  providers: [PetService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
