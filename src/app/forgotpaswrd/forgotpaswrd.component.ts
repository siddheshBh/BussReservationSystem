import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-forgotpaswrd',
  templateUrl: './forgotpaswrd.component.html',
  styleUrls: ['./forgotpaswrd.component.css']
})
export class ForgotpaswrdComponent implements OnInit {

  public fbFormGroup = this.fb.group({

    email_id: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  async update() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/update";
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);
    this.fbFormGroup.reset();

    this.router.navigate(['login']);

  }

}
