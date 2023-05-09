import {Component} from '@angular/core';
import {Color, Hero, sortByType} from "../../interfaces/hero.interface";

@Component({
  selector: 'productos-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent {
  isUpperCase: boolean = false;
  sortBy: sortByType = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: sortByType){
    this.sortBy = value;
  }
}
