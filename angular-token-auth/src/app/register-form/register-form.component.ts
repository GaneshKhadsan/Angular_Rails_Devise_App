import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    nickname: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(public authSerivce: AuthService) { }

  ngOnInit() {}


  onSignUpSubmit() {

    this.authSerivce.registerUser(this.signUpUser).subscribe(

        (res) => {

          if (res.status === 200) {
            this.onFormResult.emit({signedUp: true, res});
            alert("Student Registration Successful");
          }

        },

        (err) => {
          console.log(err.json());
          this.onFormResult.emit({signedUp: false, err});
          alert("Student Registration Failed, PLease try Again");
        }
    );

  }
}