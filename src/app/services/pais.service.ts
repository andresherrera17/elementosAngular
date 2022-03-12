import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) { }

  getPaises() {
    return this._http.get<any[]>('https://restcountries.com/v2/lang/es');
  }

}
