import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interface';
import { VuelaPipe } from '../../pipes/vuela.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  ordernarPor: string = '';
  constructor() {}

  ngOnInit(): void {}
  heroes: Heroe[] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.lila,
    },
    {
      nombre: 'robin',
      vuela: true,
      color: Color.blanco,
    },
    {
      nombre: 'aquaman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'ironman',
      vuela: false,
      color: Color.rojo,
    },
  ];
  cambiarOrden(valor: string) {
    this.ordernarPor = valor;
  }

  heroes2 = [...this.heroes];
}
