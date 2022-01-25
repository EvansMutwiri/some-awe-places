import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { FetchPlaceService } from 'src/app/services/fetch-place.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeList: Array<Place> = [];

  constructor(private fetchPlace: FetchPlaceService) {
    
  }

  ngOnInit(): void {
    this.fetchPlace.getAllPlaces().subscribe(data => {
      this.placeList = data;
    });
  }

}
