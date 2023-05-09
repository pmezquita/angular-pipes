import {Component} from '@angular/core';

@Component({
  selector: 'productos-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent {
  isUpperCase: boolean = false;

  toggleUperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
}
