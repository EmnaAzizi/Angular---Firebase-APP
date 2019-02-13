import { Component } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyCs1A0fCQgqb6DOBa1QqPIHY3qU8_Mpn-Q",
      authDomain: "testangular-f7e14.firebaseapp.com",
      databaseURL: "https://testangular-f7e14.firebaseio.com",
      projectId: "testangular-f7e14",
      storageBucket: "testangular-f7e14.appspot.com",
      messagingSenderId: "132832563129"
    };
    firebase.initializeApp(config);
  }
}
