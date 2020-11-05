import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo : '/events'
  },
  {
    path: 'events', 
    component : EventsComponent
  },
  {
    path: 'special', 
    component : SpecialEventsComponent
  },
  {
    path: 'login', 
    component : LoginComponent
  },
  {
    path: 'register', 
    component : RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }