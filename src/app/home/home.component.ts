import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient

  ) { }

  public list: any = [];

  // constructor(private http: HttpClient) { }

  async searchResults() {
    // console.log(this.http);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const results = await this.http.get(url).toPromise();
    console.log(results);
    this.list = results;
  }




  ngOnInit(): void {

    const sid = sessionStorage.getItem('sid');
    if (!sid) {
      this.router.navigate(['login']);
    }
  }

  logout() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }



}
