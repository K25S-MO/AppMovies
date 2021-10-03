import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { RespuestaMDB,Pelicula } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL= environment.url;
const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private ejetucarQuery<T>( query:string ) {
    query = URL + query;
    query += `&api_key=${ apiKey }&lenguaje=es`;
    return this.http.get<T>( query );
  }

  getFeacture(){
    
    const hoy =new  Date();
    const ultimoDia = new  Date ( hoy.getFullYear(), hoy.getMonth() + 1,0).getDate();
    const mes= hoy.getMonth() +1;
    let mesString;

    if (mes < 10 ){
     mesString = '0'+ mes;
    
    }else{
      mesString =mes;
    }

    const inicio =`${ hoy.getFullYear()}-${ mesString} -01`;
    const fin =`${ hoy.getFullYear()}-${ mesString}-${ultimoDia}`;

   
     
    return this.ejetucarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
  }
}
