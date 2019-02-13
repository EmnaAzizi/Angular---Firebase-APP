import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {

  constructor() { }
  
  // retournera une Promise qui résoudra si la création réussit, et sera rejetée avec le message d'erreur si elle ne réussit pas
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        //authentification Firebase
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}
// Connecter un user existant
signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}
// Se deconnceter 
signOutUser() {
  firebase.auth().signOut();
}

}
