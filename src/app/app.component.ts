import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodbox';
  showComponent: any;
  
  constructor(private router:Router)
  {
    if (this.router.url === '/login') {
      this.showComponent = false
      }
  }
}
