import {Component} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {

  private personas = [
    {
      nombre: 'Pedro',
      genero: 'masculino'
    },
    {
      nombre: 'Maria',
      genero: 'femenino'
    }
  ];

  persona = {
    nombre: 'Pedro',
    edad: 31,
    direccion: 'México, Campeche'
  }

  myObservabkeTimer: Observable<number> = interval(1000);

  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
    }, 3000)
  });

  isMasculino: boolean = true;

  // i18nSelect
  get nombre() {
    return this.personas[(this.isMasculino ? 0 : 1)].nombre;
  }

  get genero() {
    return this.personas[(this.isMasculino ? 0 : 1)].genero;
  }

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente = () => {
    this.isMasculino = !this.isMasculino;
  }

  borrarCliente = () => {
    this.clientes.shift();
  }

}
