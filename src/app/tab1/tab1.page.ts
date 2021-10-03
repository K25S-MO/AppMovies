import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasNuevas: Pelicula[] = [];
  slideOpts = {
    slidesPerView: 1.3,
    freeMode:true
  };

  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.moviesService.getFeacture()
     .subscribe (resp  =>{
      this.peliculasNuevas= resp.results;
    })
  }

}
