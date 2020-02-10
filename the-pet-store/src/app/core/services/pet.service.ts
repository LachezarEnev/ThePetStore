import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {APP_KEY } from 'src/app/kinvey.tokens';
import Pet from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_PETS = `${this.BASE_URL}/pets/?query={}&sort={}`;
  private readonly ALL_ADOPTION_PETS = `${this.BASE_URL}/pets/?query={"option":"adoption"}&sort={}`;
  private readonly ALL_FORSELL_PETS = `${this.BASE_URL}/pets/?query={"option":"sale"}&sort={}`;
  private readonly CREATE_PET = `${this.BASE_URL}/pets`;
  constructor(
    private http: HttpClient  
  ) { }

  createPet(body: Object) {    
    return this.http.post(this.CREATE_PET, body, {
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
    return this.http.get<Object[]>(this.ALL_ADOPTION_PETS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });
  }

  getAllForSale() {
    return this.http.get<Object[]>(this.ALL_FORSELL_PETS, {
      headers: new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('token')}`
    })
  });
  }

}
