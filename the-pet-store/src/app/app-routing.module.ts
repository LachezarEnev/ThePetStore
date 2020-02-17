import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }, 
  {
    path: 'pet',
    loadChildren: () => import('./pet/pet.module')
    .then(m => m.PetModule),
    canActivate: [AuthGuard],
        data: {
        isAuthenticated: true 
      }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule),
    canActivate: [AuthGuard],
    data: {
      isAuthenticated: false
    } 
  },
  {
    path: '**',
    component: NotFoundComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
