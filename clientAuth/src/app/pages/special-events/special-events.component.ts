import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../core/services/api.service'
import { Event } from '../../../core/models/event';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private apiEvents:ApiService) { }
  events:Event[];



  ngOnInit(): void {
    this.apiEvents.getSpecialEvents().subscribe(res => this.events = res);
  }

}
