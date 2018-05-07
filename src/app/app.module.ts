import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//Importing loopback sdk
import { SDKBrowserModule,LoopBackConfig } from '../providers/loopback-sdk';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './services/auth/authentication.service';
import { AuthGuard } from './gurads/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
  AppRoutingModule,
  LayoutModule,
  BrowserModule,
  SDKBrowserModule.forRoot(),
  ],
  providers: [LoopBackConfig,AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
