import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http: HttpClient) {
    http.get('/api/hello').subscribe((response:any) => {
      this.title = response.message;
      console.log("returned title: " + this.title);
    })
  }

  title = 'no title';
}
