import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitresService } from 'src/app/services/titres.service';
import { Router } from '@angular/router';
import { Titre } from 'src/app/models/titre.model';

@Component({
  selector: 'app-titre-form',
  templateUrl: './titre-form.component.html',
  styleUrls: ['./titre-form.component.css']
})
export class TitreFormComponent implements OnInit {

  titreForm: FormGroup;
 

  constructor(private formBuilder: FormBuilder, private titresService: TitresService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.titreForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });
  }

  onSaveTitre() {
    const title = this.titreForm.get('title').value;
    const author = this.titreForm.get('author').value;
    const synopsis = this.titreForm.get('synopsis').value;
    const photo = this.titreForm.get('photo').value;
    const newTitre = new Titre(title, author);
    newTitre.synopsis = synopsis;
    newTitre.photo=photo ;

    this.titresService.createNewTitre(newTitre);
    this.router.navigate(['/titres']);
  }
}
