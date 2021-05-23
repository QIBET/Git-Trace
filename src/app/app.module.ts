import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FindrepoComponent } from './components/findrepo/findrepo.component';
import { FinduserComponent } from './components/finduser/finduser.component';


@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    NavbarComponent,
    FindrepoComponent,
    FinduserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
