import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public invalidCred = false;


  public fbFormGroup = this.fb.group({
    email_id: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
  }
  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3000/auth-user";
    const result: any = await this.http.post(url, data).toPromise();
    console.log(result);

    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    }
    else {
      this.invalidCred = true;
      this.fbFormGroup.reset();
    }


    // this.router.navigate(['login']);
    // this.fbFormGroup.reset();
  }

}

