import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  msg:string;
  userDetails:any = {}

  registerUser(){ 
    if(this.userDetails.email && this.userDetails.password){
      this.auth.register(this.userDetails).subscribe(err => {
        if(err){
          this.msg = 'Error register';
        }
      },
        res => {
        if(res.status < 300){
          console.log(res);
          this.msg ='Success Register!';
        }
      } )
    }
  }

  ngOnInit(): void {
  }

}
