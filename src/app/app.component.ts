import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAUP6Jj8VoTOPQWNNGDpYPT31Yop30s2GQ",
      authDomain: "jta-insta-clone-8b2ca.firebaseapp.com",
      projectId: "jta-insta-clone-8b2ca",
      storageBucket: "jta-insta-clone-8b2ca.appspot.com",
      messagingSenderId: "1061964359981",
      appId: "1:1061964359981:web:fa3508ff707aa66de60ba4",
      measurementId: "G-7X8YB1B5WK"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    firebase.initializeApp(app)
  }

}
