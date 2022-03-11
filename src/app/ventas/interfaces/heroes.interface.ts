export enum Color {
  rojo,
  negro,
  azul,
  lila,
  blanco,
  violeta,
}

export interface Heroe {
  nombre: string;
  color: Color;
  vuela: boolean;
}
