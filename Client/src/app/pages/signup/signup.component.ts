import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  errorMessage: any = {};
  userForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      User_name: [''],
      User_email: [''],
      User_password: ['']
    });
  }

  handleSubmit() {
    const userData = {
      User_name: this.userForm.value.User_name || '',
      User_email: this.userForm.value.User_email || '',
      User_password: this.userForm.value.User_password || '',
    };

    this.http.post('http://localhost:8080/api/signup', userData)
      .subscribe(
        (response) => {
          console.log(response);
          const confirm = window.confirm('Registration Successful! Login Now!')
          if (confirm) {
            this.router.navigate(['signin'])
          }
        },
        (error) => {
          console.error(error);
          if (error.error && error.error.errors) {
            this.errorMessage = error.error.errors;
          }
        }
      );



  }
  clearFieldError(fieldName: string) {
    this.errorMessage[fieldName] = ''; // Xóa thông báo lỗi của trường nhập liệu khi người dùng rời khỏi nó
  }
}