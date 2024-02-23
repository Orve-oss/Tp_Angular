import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }


  public getAllCategorie():Observable<Array<Category>>{
    return this.http.get<Array<Category>>('http://localhost:8888/categories');
  }

  public deleteCategorie(categorie:Category){
    return this.http.delete<Array<Category>>(`http://localhost:8888/categories/${categorie.id}`);

  }

  public getCategoryById(categorieId:number):Observable<Category>{
    return this.http.get<Category>(`http://localhost:8888/categories/${categorieId}`);
  }

  public updateCategorie(categorie:Category):Observable<Category>{
    return this.http.put<Category>(`http://localhost:8888/categories/${categorie.id}`, categorie);
  }

  public saveCategorie(categorie:Category):Observable<Category>{
    return this.http.post<Category>(`http://localhost:8888/categories`, categorie);
  }
}
