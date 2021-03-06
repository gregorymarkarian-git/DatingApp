import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.authservice.register(this.model).subscribe(() => {
      console.log('registration successfull');
    }, error => {
      console.log(error);
    }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
