import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Category } from '../models/categorie.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {



editerCategorie(cat: Category) {

  this.router.navigateByUrl(`editer-categorie/${cat.id}`);

}


  deleteCategorie(cat: Category) {
    if (confirm('Etes-vous sur de vouloir supprimer?')) {
      this.cs.deleteCategorie(cat).subscribe({


        next: value => {
          this.categories = this.categories.filter(p => p.id != cat.id);
        }
      })
    }


  }

  constructor(private cs: CategorieService,
    private router:Router) { }

  categories: Array<Category> = []; //array de categorie

  ngOnInit(): void {
    this.cs.getAllCategorie().subscribe({
      next: data => {
        this.categories = data
      },
      error: err => {
        console.log(err);
      }
    })
  }


}
