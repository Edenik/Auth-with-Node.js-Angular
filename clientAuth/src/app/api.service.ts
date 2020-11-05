import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getGuestEvents() : Observable <Event[]> {
    return this.http.get<Event[]> (`${environment.apiEvents}/events/guest`);
  }

  getSpecialEvents() : Observable <Event[]> {
    return this.http.get<Event[]> (`${environment.apiEvents}/events/special`);
  }
}
