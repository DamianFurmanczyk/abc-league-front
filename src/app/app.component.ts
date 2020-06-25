import { Component, OnInit  } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'abcLeagueFront';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log('asd');
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});  return this.http.get<{status_code: number, data: Users[], message: string}>(this.apiUrl + 'allUsers', {headers: headers});  }

    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // this.http.get('http://api.abcleague.webup-dev.pl/accounts/region/1').subscribe(console.log);

  }
}
