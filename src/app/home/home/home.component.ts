import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
import { Place } from 'src/app/models/place.model';
import { FetchPlaceService } from 'src/app/services/fetch-place.service';
import { animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style(
            {
              opacity: 0,
              height: 0
            }
          ),
          stagger(60, [
            animate('10s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
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
