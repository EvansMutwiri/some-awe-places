import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { NgForm } from '@angular/forms';
import { FetchPlaceService } from 'src/app/services/fetch-place.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  place: Place = new Place();

  constructor(private fetchPlace: FetchPlaceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log(form)

    //create service to store array and manage it

    this.fetchPlace.addPlace(form.value);
    console.log(form.value)
    // this.router.navigateByUrl('/');
  }

}
