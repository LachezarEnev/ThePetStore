import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {APP_KEY } from 'src/app/kinvey.tokens';
import Pet from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_PETS = `${this.BASE_URL}/pets/?query={}&sort={"likes": -1}`;
  private readonly ALL_ADOPTION_PETS = `${this.BASE_URL}/pets/?query={"option":"adoption"}&sort={"likes": -1}`;
  private readonly ALL_FORSELL_PETS = `${this.BASE_URL}/pets/?query={"option":"sale"}&sort={"likes": -1}`;
  private readonly PETS_LINK = `${this.BASE_URL}/pets`;  
  constructor(
    private http: HttpClient  
  ) { }

  createPet(body: Object) {    
    return this.http.post(this.PETS_LINK, body, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`             
      })
    });
  }

  getAll() {
    return this.http.get<Pet[]>(this.ALL_PETS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });
  }

  getAllForAdoption() {
    return this.http.get<Pet[]>(this.ALL_ADOPTION_PETS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });
  }

  getAllForSale() {
    return this.http.get<Pet[]>(this.ALL_FORSELL_PETS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });
  }

  getPetById(id: string) {    
    return this.http.get<Pet>(`${this.PETS_LINK}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });  
  }

  updatePet(pet: Object, id: string) {
    return this.http.put(`${this.PETS_LINK}/${id}`, pet, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  }); 
  }

}
