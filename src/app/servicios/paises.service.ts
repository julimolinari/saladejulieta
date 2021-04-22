import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient:HttpClient) { }

  public obtenerImagenes(){
   return this.httpClient.get('https://restcountries.eu/rest/v2/regionalbloc/usan');
  }
  
}
