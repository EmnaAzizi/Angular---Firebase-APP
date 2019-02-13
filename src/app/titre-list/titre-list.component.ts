
import { Component, OnDestroy, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { Titre } from '../models/titre.model';
import { Subscription } from 'rxjs';
import { TitresService } from '../services/titres.service';
@Component({
  selector: 'app-titre-list',
  templateUrl: './titre-list.component.html',
  styleUrls: ['./titre-list.component.css']
})
export class TitreListComponent implements OnInit , OnDestroy {
    titres: Titre[];
    titresSubscription: Subscription;
  
    constructor(private TitresService: TitresService, private router: Router) {}
  
    ngOnInit() {
      this.titresSubscription = this.TitresService.titresSubject.subscribe(
        (titres: Titre[]) => {
          this.titres = titres;
        }
      );
      this.TitresService.emitTitres();
    }
    
  
    onNewTitre() {
      this.router.navigate(['/titres', 'new']);
    }
  
    onDeleteTitre(titre: Titre) {
      this.TitresService.removeTitre(titre);
    }
  
    onViewTitre(id: number) {
      this.router.navigate(['/titres', 'view', id]);
    }
    
    ngOnDestroy() {
      this.titresSubscription.unsubscribe();
    }
  }
 


