import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  chill = true;
  user: any;
  show() {
    this.chill = !this.chill;
  };

  ngOnInit() {
    this.user = localStorage.getItem('user');
  }
  logout(): void {
    const confirm = window.confirm('Are you sure you want to logout?');
    if (confirm) {
      localStorage.removeItem('user');
      location.reload();
      alert('Successfully logged out!')
    }
  }
}
