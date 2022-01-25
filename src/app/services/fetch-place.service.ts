import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Place } from '../models/place.model';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API_URL = `${environment.BASE_URL}/api/v1/places`;
@Injectable({
  providedIn: 'root'
})
export class FetchPlaceService {

  constructor(private http: HttpClient) { 
  }

  addPlace(place: Place): Observable<any> {
    return this.http.post(API_URL, place);
  }

  deletePlace(place: Place): Observable<any> {
    return this.http.delete(`${API_URL}/${place.id}`);
  }

  getAllPlaces(): Observable<any> {
    return this.http.get(API_URL)
  }
}
