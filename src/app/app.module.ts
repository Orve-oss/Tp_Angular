import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { NouvelleCategorieComponent } from './nouvelle-categorie/nouvelle-categorie.component';
import { EditerCategorieComponent } from './editer-categorie/editer-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ListeCategoriesComponent,
    NouvelleCategorieComponent,
    EditerCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
