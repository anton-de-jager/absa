import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserRemoveComponent } from './components/user-remove/user-remove.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserRemoveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
