export enum Color {
  rojo,
  negro,
  azul,
  lila,
  blanco,
  rosa,
  marron,
}

export interface Heroe {
  nombre: string;
  color: Color;
  vuela: boolean;
}
