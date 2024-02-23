import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.css']
})
export class NouvelleCategorieComponent implements OnInit {

  categorieForm!:FormGroup;
  constructor(private fb:FormBuilder,
     private cat : CategorieService,
     private router:Router){ }
     ngOnInit(): void {
      this.categorieForm = this.fb.group({
        designation : this.fb.control('', [Validators.required]) });
      }
      saveCategorie(){
        let categorie = this.categorieForm.value;
        this.cat.saveCategorie(categorie) .subscribe({
          next: data => {

            this.router.navigateByUrl("/categories");
          },
          error: err=>{
            console.log(err);
          }
        });
      }

}
