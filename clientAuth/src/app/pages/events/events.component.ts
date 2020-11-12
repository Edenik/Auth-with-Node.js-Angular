import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../core/services/api.service'
import { Event } from '../../../core/models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private apiEvents:ApiService) { }
  events:Event[];



  ngOnInit(): void {
    this.apiEvents.getGuestEvents().subscribe(res => this.events = res);
  }

}
