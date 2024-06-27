import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aguilas-foraneas';

  mostrarSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.mostrarSidebar = !(event.url === '/login' || event.url === '/registro' || event.url === '/' );
      }
    });
  }
}
