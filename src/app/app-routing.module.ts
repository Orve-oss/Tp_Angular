import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { NouvelleCategorieComponent } from './nouvelle-categorie/nouvelle-categorie.component';
import { EditerCategorieComponent } from './editer-categorie/editer-categorie.component';

const routes: Routes = [
  {path:"categories",component:ListeCategoriesComponent},
  {path:"add-categorie",component:NouvelleCategorieComponent},
  {path: "editer-categorie/:id", component:EditerCategorieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
