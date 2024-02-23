import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  status:boolean = true;
  title:string = 'Titre initial';
  name:string = 'Hervé';


  changeTitle(){
    this.title = 'nouveau titre';
  }

}
