import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'pedRo méZquiTa';
  valor: number = 1000;
  obj = {
    nombre: 'Pedro'
  }

  mostrarNombre = () => {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  };
}
