import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  errorMessage: any = {};
  userForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      User_email: [''],
      User_password: ['']
    });
  }



  handleSubmit() {
    const userData = {
      User_email: this.userForm.value.User_email || '',
      User_password: this.userForm.value.User_password || '',
    };
    this.http.post('http://localhost:8080/api/signin', userData)
      .subscribe(
        (response: any) => {
          const user = response.checkUser;
          // Chuyển đối tượng thành chuỗi JSON
          const userJson = JSON.stringify(user);

          // Lưu chuỗi JSON vào localStorage
          localStorage.setItem('user', userJson);

          console.log(user.User_role);
          if (user.User_role === 'admin') {
            alert("Login Successfully(admin)")
            this.router.navigate(['Admin'])
          } else {
            alert("Login Successfully")
            this.router.navigate([''])
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
    this.errorMessage[fieldName] = '';
  }
}
