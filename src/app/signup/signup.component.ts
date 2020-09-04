import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {


  public fbFormGroup = this.fb.group({
    first_name: ['', Validators.required],
    email_id: ['', Validators.required],
    contact_no: ['', Validators.required],
    password: ['', Validators.required],

  })
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  async registerProcess() {

    const data = this.fbFormGroup.value;

    console.log(data);

    const url = "http://localhost:3000/adduser"

    const result = await this.http.post(url, data).toPromise();

    console.log(result);

    this.fbFormGroup.reset();

    //this.router.navigate(['login']);

  }


}


//================================================================================
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }