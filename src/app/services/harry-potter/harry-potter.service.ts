import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class HarryPotterService {
private URL= 'https://raw.githubusercontent.com/EstherTeran/LIM009-DL-2.0/master/src/data/potter.json'; 
  constructor(private http: Http) { }
  getHarryPotterData(){
    return this.http.get(this.URL)
    .map(response=>response.json());
  }

}
