export enum Color {
  rojo,
  negro,
  azul,
  lila,
  blanco,
}

export interface Heroe {
  nombre: string;
  color: Color;
  vuela: boolean;
}
