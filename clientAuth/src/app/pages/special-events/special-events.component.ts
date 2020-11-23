import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../core/services/api.service'
import { Event } from '../../../core/models/event';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private apiEvents:ApiService, private router:Router) { }
  events:Event[];



  ngOnInit(): void {
    this.apiEvents.getSpecialEvents().subscribe(
      res => this.events = res,
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

}
