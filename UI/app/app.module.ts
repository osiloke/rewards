import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashBoardModule } from './dashboard/dashboard.module';
import { UserModule } from './users/user.module';
import { AppGuard } from './app-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]), 
    DashBoardModule,
    UserModule
  ],
  declarations: [ AppComponent, LoginComponent ],
  providers:[AppGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
