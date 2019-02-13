import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitresService } from 'src/app/services/titres.service';
import { Titre } from 'src/app/models/titre.model';

@Component({
  selector: 'app-single-titre',
  templateUrl: './single-titre.component.html',
  styleUrls: ['./single-titre.component.css']
})
export class SingleTitreComponent implements OnInit {

  
    titre: Titre;
  
    constructor(private route: ActivatedRoute, private titresService: TitresService,
                private router: Router) {}
  
    ngOnInit() {
      this.titre = new Titre('', '');
      const id = this.route.snapshot.params['id'];
      this.titresService.getSingleTitre(+id).then(
        (titre: Titre) => {
          this.titre = titre;
        }
      );
    }
  
    onBack() {
      this.router.navigate(['/titres']);
    }
  }

