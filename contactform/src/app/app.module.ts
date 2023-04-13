import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import{AngularFireModule} from '@angular/fire';
import {AngularFireStore} from '@angular/fire/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LFB73TQnRYP3hSt8OTdZcKlNTJHH91Y",
  authDomain: "contact-147db.firebaseapp.com",
  projectId: "contact-147db",
  storageBucket: "contact-147db.appspot.com",
  messagingSenderId: "966858300816",
  appId: "1:966858300816:web:7f0c4561e1a0a5ec8da715",
  measurementId: "G-R1MQFV9GV8"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireStore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
