import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  place: Place = new Place();

  constructor() { }

  ngOnInit(): void {
  }

}
