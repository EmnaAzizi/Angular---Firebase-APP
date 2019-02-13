import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TitreListComponent } from './titre-list/titre-list.component';
import { SingleTitreComponent } from './titre-list/single-titre/single-titre.component';
import { TitreFormComponent } from './titre-list/titre-form/titre-form.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TitresService } from './services/titres.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'titres', canActivate: [AuthGuardService], component: TitreListComponent },
  { path: 'titres/new', canActivate: [AuthGuardService], component: TitreFormComponent },
  { path: 'titres/view/:id', canActivate: [AuthGuardService], component: SingleTitreComponent },
  { path: '', redirectTo: 'titres', pathMatch: 'full' },
  { path: '**', redirectTo: 'titres' }
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TitreListComponent,
    SingleTitreComponent,
    TitreFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, TitresService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
