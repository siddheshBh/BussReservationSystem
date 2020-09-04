import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotpaswrdComponent } from './forgotpaswrd/forgotpaswrd.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },

  { path: "aboutus", component: AboutusComponent },
  { path: "forgotpaswrd", component: ForgotpaswrdComponent },
  { path: "contactus", component: ContactusComponent },
  { path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
