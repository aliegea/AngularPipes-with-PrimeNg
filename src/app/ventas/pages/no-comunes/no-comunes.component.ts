import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Maria';
  genero: string = 'femenino';
  invMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  clientes: string[] = ['Maria', 'juan', 'pepe', 'tobias', 'adrià'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  persona = {
    nombre: 'Alicia',
    surname: 'Fernández',
    logged: 'true',
    email: 'info@whatever.es',
  };
  heroes = [
    {
      nombre: 'superman',
      vuela: 'true',
    },
    {
      nombre: 'robin',
      vuela: 'true',
    },
    {
      nombre: 'aquaman',
      vuela: 'false',
    },
    {
      nombre: 'ironman',
      vuela: 'false',
    },
  ];
  cambiarNombre() {
    this.nombre = 'Manuel';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }
  //Async pipe
  miObservable = interval(1000);

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ya tenemos un valor🥳');
    }, 11000);
  });
  constructor() {}

  ngOnInit(): void {}
}
