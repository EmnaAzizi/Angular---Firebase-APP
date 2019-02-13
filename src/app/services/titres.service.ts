import { Injectable } from '@angular/core';
import { Titre } from '../models/titre.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class TitresService {

  constructor() { 
    this.getTitres();
  }

  titres: Titre[] = [];
  titresSubject = new Subject<Titre[]>();

  emitTitres() {
    this.titresSubject.next(this.titres);
  }


  saveTitres() {
    firebase.database().ref('/titres').set(this.titres);
}



getTitres() {
  firebase.database().ref('/titres')
    .on('value', (data: firebase.database.DataSnapshot) => {
        this.titres = data.val() ? data.val() : [];
        this.emitTitres();
      }
    );
}

getSingleTitre(id: number) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/titres/' + id).once('value').then(
        (data: firebase.database.DataSnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}
createNewTitre(newTitre: Titre) {
  this.titres.push(newTitre);
  this.saveTitres();
  this.emitTitres();
}

removeTitre(titre: Titre) {
   const titreIndexToRemove = this.titres.findIndex(
    (titreA) => {
      if(titreA === titre) {
        return true;
      }
    }
  );
  this.titres.splice(titreIndexToRemove, 1);
  this.saveTitres();
  this.emitTitres();
}
}

