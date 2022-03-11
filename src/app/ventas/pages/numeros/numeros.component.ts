import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 2566677890.6776;
  porcentaje: number = 0.48;
  constructor() {}

  ngOnInit(): void {}
}
