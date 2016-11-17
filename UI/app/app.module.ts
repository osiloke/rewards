import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { RewardModule } from "./rewards/rewards.module";


@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: 'login', component: LoginComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]), 
    RewardModule
  ],
  declarations: [
      AppComponent,
      LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
