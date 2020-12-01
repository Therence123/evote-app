import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NominationviewComponent } from './modules/nominationview/nominationview.component';
import { ViewprofileComponent } from './modules/viewprofile/viewprofile.component';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NominationviewComponent,
    ViewprofileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
    MatIconModule,
    MatDividerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
